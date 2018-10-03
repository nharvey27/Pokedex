require 'rails_helper'

RSpec.describe PokemonAbility, type: :model do
  describe "Active Record Relationships" do
    it { should belong_to(:pokemon) }
    it { should belong_to(:ability) }
  end
end
