require 'rails_helper'

RSpec.describe PokemonType, type: :model do
  describe "Active Record Relationship" do
    it { should belong_to(:pokemon) }
    it { should belong_to(:type) }
  end
end
