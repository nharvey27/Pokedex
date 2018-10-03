require 'rails_helper'

RSpec.describe Stat, type: :model do
  describe "Active Record Relationship" do
    it { should have_many(:pokemons).through(:pokemon_stats) }
  end
end
