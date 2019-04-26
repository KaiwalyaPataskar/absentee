class UpdateTypeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :type
    add_column :users, :user_type, :string
  end
end
