class CreateUserInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :user_infos do |t|
    	t.integer :roll_number
      t.timestamps
    end
  end
end
