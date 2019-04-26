class User < ApplicationRecord
  has_one :user_info
  validates :email, uniqueness: true
  validates :role, acceptance: { accept: ['Admin', 'Teacher', 'Student'] }
end
