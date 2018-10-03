class CreatePokemonTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemon_types do |t|
      t.belongs_to :pokemon, index: true
      t.belongs_to :type, index: true

      t.timestamps
    end
  end
end
