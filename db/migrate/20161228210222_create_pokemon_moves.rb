class CreatePokemonMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemon_moves do |t|
      t.references :pokemon, foreign_key: true
      t.integer :version_group_id
      t.references :move, foreign_key: true
      t.integer :pokemon_move_method_id
      t.integer :level
      t.integer :order

      t.timestamps
    end
  end
end
