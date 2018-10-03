class CreatePokemonTable < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :species_id
      t.integer :height
      t.integer :weight
      t.integer :base_exp
      t.integer :order
      t.integer :is_default
    end
  end
end
