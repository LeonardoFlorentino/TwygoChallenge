class Course < ApplicationRecord
  has_many :urls, dependent: :destroy
end

