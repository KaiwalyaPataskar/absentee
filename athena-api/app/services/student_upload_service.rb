require 'csv'

class StudentUploadService
  def initialize(params)
    @file = params[:file]
    @school_id = params[:school_id]
  end

  def upload_records
    message_hash = Hash.new
    if ['text/csv', 'application/octet-stream', 'application/vnd.ms-excel'].include?(@file.content_type)
      csv_file = File.open(@file.path)
      students = CSV.parse( csv_file, headers: true )
      if students.headers == ['Registration Number', 'Class', 'Division', 'Roll Number', 'Student Name', 'Mobile Number']
        result = ImportCsvWorkerJob.perform_now(@school_id, students)
        message_hash[:value] = result
      else
        message_hash[:value] = "Invalid Headers!"    
      end  
    else
      message_hash[:value] = "Invalid File Type"
    end
    return message_hash 
  end
end