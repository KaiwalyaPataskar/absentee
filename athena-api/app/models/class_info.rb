class ClassInfo < ApplicationRecord
  # belongs_to :user_info
  validates_presence_of :name
end
