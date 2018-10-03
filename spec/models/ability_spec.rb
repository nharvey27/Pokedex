require 'rails_helper'

RSpec.describe Ability, type: :model do
  describe "Active Record Relationships" do
    it{ should have_many(:pokemons).through(:pokemon_abilities)}
  end
end
