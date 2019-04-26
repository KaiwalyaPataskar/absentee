class V1::UsersController < ApplicationController

  before_action :set_user, only: [:show, :update, :destroy]
  
  def index
    @users = User.where(school_id: params[:school_id])
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

  private

  def user_params
    # whitelist params
    params.permit(:name, :registration_number, :mobile_number, :user_type, :school_id, :file)
  end

  def set_user
    @user = User.where(id: params[:id], school_id: params[:school_id]).first
  end
end
