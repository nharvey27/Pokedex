require 'rails_helper'

RSpec.describe Pokemon, type: :model do
  describe "Active Record Relationships" do
    it { should have_many(:types).through(:pokemon_types) }
    it { should have_many(:stats).through(:pokemon_stats) }
    it { should have_many(:abilities).through(:pokemon_abilities) }
    it { should have_many(:moves).through(:pokemon_moves) }
  end
end
