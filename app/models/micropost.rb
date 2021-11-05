class Micropost < ApplicationRecord
  belongs_to :user
  validates :content, presence: true, length: { maximum: 140 }
  # has_many :microposts, dependent: :destroy
end
