class House < ApplicationRecord
    belongs_to :user
    validates :title, presence: true, length: { maximum: 50,
                                                too_long: '50 characters in Article title is the maximum allowed.',
                                                 minimum: 4 }
    validates :about, presence: true, length: { maximum: 700,
                                                too_long: '1000 characters in Article content is the maximum allowed.',
                                                minimum: 20 }
    has_many :favorites, dependent: :destroy
end
