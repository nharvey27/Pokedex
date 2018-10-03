require 'rails_helper'

RSpec.describe Move, type: :model do
  describe "Active Record Relationships" do
    it { should belong_to(:type) }
    it { should have_many(:pokemons).through(:pokemon_moves) }
  end
end
