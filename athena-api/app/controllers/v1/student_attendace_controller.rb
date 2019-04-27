class V1::StudentAttendanceController < ApplicationController
  
  def create
    user_ids = params["user_ids"]
    present = params["present"].to_s.downcase == 'true' ? true : false
    user_ids.each{|uid| StudentAttendance.create!(date: Date.today, attended: present, user_id: uid)}
    json_response("response accepted")
  end

end