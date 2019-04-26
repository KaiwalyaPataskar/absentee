class CreateStudentAttendaceTable < ActiveRecord::Migration[5.2]
  def change
    create_table :student_attendaces do |t|
      t.integer :user_id
      t.date :date
      t.string :sms_status
      t.boolean :attendance
      t.timestamps
    end
  end
end
