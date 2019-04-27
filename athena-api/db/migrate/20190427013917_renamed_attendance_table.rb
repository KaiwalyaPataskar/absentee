class RenamedAttendanceTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :student_attendaces, :student_attendances
  end
end
