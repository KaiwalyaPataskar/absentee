class ImportCsvWorkerJob < ApplicationJob
  queue_as :default

  def perform(school_id, students)
    message = nil
    header = []
    is_valid = true
    @error_count = 0
    @school = School.find(school_id)
    CSV.open("#{Rails.root}/public/#{@school.name}-invalid_records.csv","w") do |csv|
      CSV.parse(students.to_s,headers: true) do |row|
        next if row.to_a == ['Registration Number', 'Class', 'Division', 'Roll Number', 'Student Name', 'Mobile Number']
        
        ActiveRecord::Base.transaction do
          @student = @school.users.new(name: row['Student Name'], registration_number: row['Registration Number'],
                                                         mobile_number: row['Mobile Number'], user_type: 'Student')
          if !@student.save
            is_valid = false
            @student.errors.to_a.each do |error|
              row << error
            end
            csv << row
            @error_count += 1
          else
            class_info = ClassInfo.find_or_create_by!(name: row['Class'], school_id: school_id)
            division = Division.find_or_create_by!(name: row['Division'], class_id: class_info.id, school_id: school_id)
            @user_info = UserInfo.create!(school_id: school_id, class_info_id: class_info.id, 
                                          division_id: division.id, user_id: @student.id, roll_number: row['Roll Number'])
          end
          raise ActiveRecord::Rollback if @error_count.positive?
        end
      end
    end

    if is_valid == false
      message = "Some Records are Invalid! Click Invalid Records CSV to download file!"
    else
      message = "Records Uploaded"
    end
    
    return message
  end
end
