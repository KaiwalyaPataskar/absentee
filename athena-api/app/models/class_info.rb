class ClassInfo < ApplicationRecord
	# belongs_to :user_info
	validates_uniqueness_of :name
end
