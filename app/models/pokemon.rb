class Pokemon < ApplicationRecord
  has_many :pokemon_types
  has_many :types, through: :pokemon_types

  has_many :pokemon_stats
  has_many :stats, through: :pokemon_stats

  has_many :pokemon_abilities
  has_many :abilities, through: :pokemon_abilities

  has_many :pokemon_moves
  has_many :moves, through: :pokemon_moves

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  
  def self.all_cached
    Rails.cache.fetch('Pokemon.all') { all }
  end

end
