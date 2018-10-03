class CreatePokemonStats < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemon_stats do |t|
      t.belongs_to :pokemon, index: true
      t.belongs_to :stat, index: true
      t.integer :base_stat
      t.integer :effort

      t.timestamps
    end
  end
end
