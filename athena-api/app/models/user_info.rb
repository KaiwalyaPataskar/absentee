class UserInfo < ApplicationRecord
  belongs_to :user
  has_one :class_info
  has_one :division
end
