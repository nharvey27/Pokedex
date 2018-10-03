require 'rails_helper'

RSpec.describe Type, type: :model do
  describe "Active Record Relationships" do
    it { should have_many(:pokemons).through(:pokemon_types) }
  end
end
