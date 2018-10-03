# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161228210222) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.string   "name"
    t.integer  "generation_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "moves", force: :cascade do |t|
    t.string   "name"
    t.integer  "type_id"
    t.integer  "power"
    t.integer  "pp"
    t.integer  "accuracy"
    t.integer  "priority"
    t.integer  "target_id"
    t.integer  "damage_class_id"
    t.integer  "effect_id"
    t.integer  "effect_chance"
    t.integer  "contest_type_id"
    t.integer  "contest_effect_id"
    t.integer  "super_contest_effect_id"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["type_id"], name: "index_moves_on_type_id", using: :btree
  end

  create_table "pokemon_abilities", force: :cascade do |t|
    t.integer  "pokemon_id"
    t.integer  "ability_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ability_id"], name: "index_pokemon_abilities_on_ability_id", using: :btree
    t.index ["pokemon_id"], name: "index_pokemon_abilities_on_pokemon_id", using: :btree
  end

  create_table "pokemon_moves", force: :cascade do |t|
    t.integer  "pokemon_id"
    t.integer  "version_group_id"
    t.integer  "move_id"
    t.integer  "pokemon_move_method_id"
    t.integer  "level"
    t.integer  "order"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["move_id"], name: "index_pokemon_moves_on_move_id", using: :btree
    t.index ["pokemon_id"], name: "index_pokemon_moves_on_pokemon_id", using: :btree
  end

  create_table "pokemon_stats", force: :cascade do |t|
    t.integer  "pokemon_id"
    t.integer  "stat_id"
    t.integer  "base_stat"
    t.integer  "effort"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pokemon_id"], name: "index_pokemon_stats_on_pokemon_id", using: :btree
    t.index ["stat_id"], name: "index_pokemon_stats_on_stat_id", using: :btree
  end

  create_table "pokemon_types", force: :cascade do |t|
    t.integer  "pokemon_id"
    t.integer  "type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pokemon_id"], name: "index_pokemon_types_on_pokemon_id", using: :btree
    t.index ["type_id"], name: "index_pokemon_types_on_type_id", using: :btree
  end

  create_table "pokemons", force: :cascade do |t|
    t.string   "name"
    t.integer  "species_id"
    t.integer  "height"
    t.integer  "weight"
    t.integer  "base_exp"
    t.integer  "order"
    t.integer  "is_default"
    t.string   "image"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "stats", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "types", force: :cascade do |t|
    t.string   "name"
    t.integer  "generation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "pokemon_abilities", "abilities"
  add_foreign_key "pokemon_abilities", "pokemons"
  add_foreign_key "pokemon_moves", "moves"
  add_foreign_key "pokemon_moves", "pokemons"
end
