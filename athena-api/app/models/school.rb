class School < ApplicationRecord
  has_many :users, dependent: :destroy
  validates_presence_of :name, :address, :contact_number
  validates_length_of :contact_number, minimum: 10, maximum: 10, :numericality => true
 end
