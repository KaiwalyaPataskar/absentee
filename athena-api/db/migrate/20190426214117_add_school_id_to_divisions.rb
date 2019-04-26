class AddSchoolIdToDivisions < ActiveRecord::Migration[5.2]
  def change
    add_column :divisions, :school_id, :integer
  end
end
