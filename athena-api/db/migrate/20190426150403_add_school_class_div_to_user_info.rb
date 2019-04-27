class AddSchoolClassDivToUserInfo < ActiveRecord::Migration[5.2]
  def change
    add_reference :user_infos, :school, index: true
    add_reference :user_infos, :class_info, index: true
    add_reference :user_infos, :division, index: true
    add_reference :user_infos, :user, index: true
  end
end
