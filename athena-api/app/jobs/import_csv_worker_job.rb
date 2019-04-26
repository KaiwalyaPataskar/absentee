class ImportCsvWorkerJob < ApplicationJob
  queue_as :default

  def perform(school_id, students)
    message = nil
    header = []
    is_valid = true

    CSV.open("#{Rails.root}/public/#{@terminal.name}-invalid_records.csv","w") do |csv|
      CSV.parse(menu_items.to_s,headers: true) do |row|
    
        next if row.to_a == ['registration_number', 'class_name', 'division_name', 'roll_number', 'student_name', 'mobile_number']
       
        @student = @school.students.find_or_initialize_by(name: row['name'], registration_number: row['registration_number'], mobile_number: row['mobile_number'], type: 'Student', user_info_attributes: {class: })

        if !@menu_item.save
          is_valid = false
          @student.errors.to_a.each do |error|
            row << error
          end
          csv << row
        else
          @user_info = UserInfo.create(school_id: school_id, class_info_id: row['class'], division_id: row['division'], user_id: @student)
        end
      end
    end

    if is_valid == false
      message = "Some Records are Invalid! Click Invalid Records CSV to download file!!!"
    else
      message = "Records Uploaded!"
    end

    return message
  end
end
