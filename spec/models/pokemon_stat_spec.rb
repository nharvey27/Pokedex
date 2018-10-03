require 'rails_helper'

RSpec.describe PokemonStat, type: :model do
  describe "Active Record Relationships " do
    it { should belong_to(:pokemon) }
    it { should belong_to(:stat) }
  end
end
