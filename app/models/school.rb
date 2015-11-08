class School < ActiveRecord::Base
	### Associations
	has_many :buildings

	### Validations
	validates :school_name, presence: true
end
