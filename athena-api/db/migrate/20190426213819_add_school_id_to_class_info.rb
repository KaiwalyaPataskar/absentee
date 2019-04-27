class AddSchoolIdToClassInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :class_infos, :school_id, :integer
  end
end
