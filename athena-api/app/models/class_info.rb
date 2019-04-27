class ClassInfo < ApplicationRecord
  # belongs_to :user_info
  validates_presence_of :name
  has_many :divisions, foreign_key: "class_id"
end
