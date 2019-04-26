class User < ApplicationRecord
  has_one :user_info
  belongs_to :school

  validates :registration_number, uniqueness: true
  validates :role, acceptance: { accept: ['Admin', 'Teacher', 'Student'] }
end
