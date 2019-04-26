class V1::DivisionsController < ApplicationController
  before_action :set_division, only: [:show, :update, :destroy]
  
  def index
    @division = Division.where(school_id: params[:school_id], class_id: params[:class_id])
    json_response(@division)
  end

  # POST v1/
  def create
    @division = Division.create!(division_params)
    json_response(@division, :created)
  end

  # GET v1/schools/:id
  def show
    json_response(@division)
  end

  # PUT v1/schools/:id
  def update
    @division.update(division_params)
    json_response(@division, :updated)
  end

  # DELETE v1/users/:id
  def destroy
    @division.destroy
    json_response(@division, :destroyed)
  end

  private

  def division_params
    # whitelist params
    params.permit(:name, :school_id, :class_id)
  end

  def set_division
    @division = Division.where(id: params[:id], class_id: params[:class_id])
  end
end
