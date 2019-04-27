class V1::SchoolsController < ApplicationController
  before_action :set_school, only: [:show, :update, :destroy]
  
  def index
    @schools = School.all
    json_response(@schools)
  end

  # POST v1/schools
  def create
    @school = School.create!(school_params)
    json_response(@school, :created)
  end

  # GET v1/schools/:id
  def show
    json_response(@school)
  end

  # PUT v1/schools/:id
  def update
    @school.update(school_params)
    json_response(@school, :updated)
  end

  # DELETE v1/users/:id
  def destroy
    @school.destroy
    json_response(@school, :destroyed)
  end

  def import
   unless params[:file].nil?
     result = StudentUploadService.new(file: params[:file], school_id: params[:id]).upload_records
     byebug
     response = { path: v1_school_users_path(params[:id]), notice: result[:value] }
     if ["Some Records are Invalid! Click Invalid Records CSV to download file!", 
         "Invalid File Type", "Invalid Headers!"].include?response[:notice]
       school_name = School.find(params[:id]).send(:name)
       response = { path: "#{Rails.root}/public/#{school_name}-invalid_records.csv" }
       return json_response(response, :download_error_file)
     end
     return json_response(response, :imported)
   end
  end

  def get_data
    @divisions = Division.where(school_id: params[:id]).select(:id, :name)
    @classes = ClassInfo.where(school_id: params[:id]).select(:id, :name)
    response = { divisions: @divisions, classes: @classes }
    json_response(response, :fetched)
  end

  def get_students
    students = User.where(school_id: params[:id])
    students = students.joins(:user_info).where("user_infos.division_id": params[:division_id],
                                               "user_infos.class_info_id": params[:class_id])
                                               .select("users.name, user_infos.roll_number", "users.id")
    return json_response(nil, :not_found) unless students.present?
    json_response(students, :fetched)
  end

  private

  def school_params
    # whitelist params
    params.permit(:name, :address, :contact_number)
  end

  def set_school
    @school = School.find(params[:id])
  end
end
