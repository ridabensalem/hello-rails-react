class Message < ApplicationRecord
  # Attributes
  attribute :text, :string

  # Validations
  validates :text, presence: true
end
