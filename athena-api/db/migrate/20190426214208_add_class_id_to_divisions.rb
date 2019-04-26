class AddClassIdToDivisions < ActiveRecord::Migration[5.2]
  def change
    add_column :divisions, :class_id, :integer
  end
end
