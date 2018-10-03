class CreateMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :moves do |t|
      t.string :name
      t.belongs_to :type
      t.integer :power
      t.integer :pp
      t.integer :accuracy
      t.integer :priority
      t.integer  :target_id
      t.integer :damage_class_id
      t.integer :effect_id
      t.integer :effect_chance
      t.integer :contest_type_id
      t.integer :contest_effect_id
      t.integer :super_contest_effect_id
      t.timestamps
    end
  end
end
