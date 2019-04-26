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

  private

  def school_params
    # whitelist params
    params.permit(:name, :address, :contact_number)
  end

  def set_school
    @school = School.find(params[:id])
  end
end
