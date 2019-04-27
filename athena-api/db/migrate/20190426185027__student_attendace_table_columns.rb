class StudentAttendaceTableColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :student_attendaces, :attendance
    add_column :student_attendaces, :attended, :boolean
  end
end
