class V1::UsersController < ApplicationController

  before_action :set_user, only: [:show, :update, :destroy]
  
  def index
    @users = User.where(school_id: params[:school_id])
    students = @users.joins(:user_info).select("users.id, users.name, users.registration_number, users.mobile_number, user_infos.roll_number, user_infos.division_id, user_infos.class_info_id")
    json_response(students)
  end

  def create
    unless check_if_user_present.present?
      @user = User.create!(user_params)
      @user_info = @user.create_user_info(user_info_params)
      return json_response(@user, :created)
    else
      return json_response(set_user, "User already exists")
    end
  end

  def show
    students = @user.user_info.as_json
    students[:name] = @user.name
    students[:registration_number] = @user.registration_number
    students[:mobile_number] = @user.mobile_number
    json_response(students)
  end

  def update
    return json_response([], "User with given id doesn't exist") unless @user
    unless check_if_user_present.present?
      @user.update(user_params)
      @user.create_user_info(user_info_params)
      json_response(@user, :updated)
    else
      return json_response(set_user, "You cannot update the user with same roll_number in given class/division")
    end
  end

  def destroy
    @user.destroy
    json_response(@user, :destroyed)
  end

  private

  def user_params
    # whitelist params
    params.permit(:name, :registration_number, :mobile_number, :user_type, :school_id, :file)
  end

  def user_info_params
    params.permit(:school_id, :class_info_id, :division_id, :roll_number)
  end

  def set_user
    @user = User.where(id: params[:id], school_id: params[:school_id]).first
  end

  def check_if_user_present
    UserInfo.where(roll_number: params[:roll_number], class_info_id: params[:class_info_id], division_id: params[:division_id], school_id: params[:school_id]).first
  end
end
