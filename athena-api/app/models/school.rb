class School < ApplicationRecord
  has_many :users, dependent: :destroy
  validates_presence_of :name, :address, :contact_number
 end
