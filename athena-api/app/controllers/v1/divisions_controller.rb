class V1::DivisionsController < ApplicationController
  before_action :set_division, only: [:show, :update, :destroy]
  
  def index
    @division = Division.where(school_id: params[:school_id], class_id: params[:class_id])
    json_response(@division)
  end

  def create
    unless check_if_division_present.present?
      @division = Division.create!(division_params)
      json_response(@division, :created)
    else
      return json_response(set_division, "Division already exists in the given class")
    end
  end

  def show
    json_response(@division)
  end

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
    @division = Division.where(id: params[:id], class_id: params[:class_id], school_id: params[:school_id])
  end

  def check_if_division_present
    Division.where(class_id: params[:class_id], name: params[:name], school_id: params[:school_id]).first
  end
end
