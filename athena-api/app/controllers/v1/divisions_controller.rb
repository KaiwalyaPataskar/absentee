class V1::DivisionsController < ApplicationController
  before_action :set_division, only: [:show, :update, :destroy]
  
  def index
    @division = Division.all
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
    params.permit(:name)
  end

  def set_division
    @division = Division.find(params[:id])
  end
end
