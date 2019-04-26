class UserInfo < ApplicationRecord
  belongs_to :user
  has_one :school
  has_one :class
  has_one :division
end
