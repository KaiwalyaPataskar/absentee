class V1::UsersController < ApplicationController

  before_action :set_user, only: [:show, :update, :destroy]
  
  def index
    @users = User.all
    json_response(@users)
  end

  # POST v1/users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  # GET v1/users/:id
  def show
    json_response(@user)
  end

  # PUT v1/users/:id
  def update
    @user.update(user_params)
    json_response(@user, :updated)
  end

  # DELETE v1/users/:id
  def destroy
    @user.destroy
    json_response(@user, :destroyed)
  end

  def import
    unless params[:file].nil?
      result = StudentUploadService.new(file: params[:file], school_id: School.first).upload_records
      response = { path: v1_users_path(params[:school_id]), notice: result[:value] }
      json_response(response, :created)
    end
  end

  private

  def user_params
    # whitelist params
    params.permit(:name, :registration_number, :mobile_number, :user_type, :file)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
