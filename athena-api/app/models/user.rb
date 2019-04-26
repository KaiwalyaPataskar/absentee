class User < ApplicationRecord
  has_one :user_info
  belongs_to :school

  validates_presence_of :name, :mobile_number, :user_type
  validates :registration_number, uniqueness: true
  validates :role, acceptance: { accept: ['Admin', 'Teacher', 'Student'] }
  validates_length_of :mobile_number, minimum: 10, maximum: 10
end
