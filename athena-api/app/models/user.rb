class User < ApplicationRecord
  has_one :user_info
  validates :registration_number, uniqueness: true
  validates :role, acceptance: { accept: ['Admin', 'Teacher', 'Student'] }
end
