class V1::StudentAttendaceController < ApplicationController
  
  def create
    user_ids = params["user_ids"]
    present = params["present"].to_s.downcase == 'true' ? true : false
    user_ids.each{|uid| StudentAttendace.create!(date: Date.today, attended: present, user_id: uid)}
    json_response("response accepted")
  end

end