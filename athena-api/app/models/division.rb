class Division < ApplicationRecord
  # belongs_to :user_info
  # belongs_to :user
  validates_presence_of :name
  belongs_to :class_info
end
