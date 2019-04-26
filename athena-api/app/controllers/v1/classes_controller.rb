class V1::ClassesController < ApplicationController
  before_action :set_class_info, only: [:show, :update, :destroy]
  
  def index
    @class_info = ClassInfo.all
    json_response(@class_info)
  end

  # POST v1/
  def create
    @class_info = ClassInfo.create!(class_info_params)
    json_response(@class_info, :created)
  end

  # GET v1/schools/:id
  def show
    json_response(@class_info)
  end

  # PUT v1/schools/:id
  def update
    @class_info.update(class_info_params)
    json_response(@class_info, :updated)
  end

  # DELETE v1/users/:id
  def destroy
    @class_info.destroy
    json_response(@class_info, :destroyed)
  end

  private

  def class_info_params
    # whitelist params
    params.permit(:name)
  end

  def set_class_info
    @class_info = ClassInfo.find(params[:id])
  end
end
