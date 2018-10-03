require 'rails_helper'

RSpec.describe PokemonMove, type: :model do
  describe "Active Record Relationships" do
    it {should belong_to(:pokemon) }
    it {should belong_to(:move) }
  end
end
