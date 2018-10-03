require 'csv'

pokemon_csv_text = File.read(Rails.root.join('lib', 'seeds', 'pokemon.csv'))
poke_csv = CSV.parse(pokemon_csv_text, :headers => true, :encoding => 'ISO-8859-1')
poke_csv.each do |row|
  t = Pokemon.new
  t.name = row['name']
  t.species_id = row['species_id']
  t.height = row['height']
  t.weight = row['weight']
  t.base_exp = row['base_exp']
  t.order = row['order']
  t.is_default = row['is_default']
  t.image = File.open("app/assets/images/pokemon/#{t.species_id}.png", "rb")
  t.save
end

type_csv_text = File.read(Rails.root.join('lib', 'seeds', 'types.csv'))
type_csv = CSV.parse(type_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
type_csv.each do |row|
  t = Type.new
  t.name = row['name']
  t.generation = row['generation']
  t.save
end

pokemon_type_csv_text = File.read(Rails.root.join('lib', 'seeds', 'pokemon_types.csv'))
pokemon_type_csv = CSV.parse(pokemon_type_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
pokemon_type_csv.each do |row|
  t = PokemonType.new
  t.pokemon_id = row['pokemons_id']
  t.type_id = row['types_id']
  t.save
end

stats_csv_text = File.read(Rails.root.join('lib', 'seeds', 'stats.csv'))
stats_csv = CSV.parse(stats_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
stats_csv.each do |row|
  t = Stat.new
  t.name = row['name']
  t.save
end

pokemon_stats_csv_text = File.read(Rails.root.join('lib', 'seeds', 'pokemon_stats.csv'))
pokemon_stats_csv = CSV.parse(pokemon_stats_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
pokemon_stats_csv.each do |row|
  t = PokemonStat.new
  t.pokemon_id = row['pokemon_id']
  t.stat_id = row['stat_id']
  t.base_stat = row['base_stat']
  t.effort = row['effort']
  t.save
end


abilities_csv_text = File.read(Rails.root.join('lib', 'seeds', 'abilities.csv'))
abilities_csv = CSV.parse(abilities_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
abilities_csv.each do |row|
  t = Ability.new
  t.name = row['name']
  t.generation_id = row['generation_id']
  t.save
end

pokemon_abilities_csv_text = File.read(Rails.root.join('lib', 'seeds', 'pokemon_abilities.csv'))
pokemon_abilities_csv = CSV.parse(pokemon_abilities_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
pokemon_abilities_csv.each do |row|
  t = PokemonAbility.new
  t.pokemon_id = row['pokemon_id']
  t.ability_id = row['ability_id']
  t.save
end


moves_csv_text = File.read(Rails.root.join('lib', 'seeds', 'moves.csv'))
moves_csv = CSV.parse(moves_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
moves_csv.each do |row|
  t = Move.new
  t.name = row['name']
  t.type_id = row['type_id']
  t.power = row['power']
  t.pp = row['pp']
  t.accuracy = row['accuracy']
  t.priority = row['priority']
  t.target_id = row['target_id']
  t.damage_class_id = row['damage_class_id']
  t.effect_id = row['effect_id']
  t.effect_chance = row['effect_chance']
  t.contest_type_id = row['contest_type_id']
  t.contest_effect_id = row['contest_effect_id']
  t.super_contest_effect_id = row['super_contest_effect_id']
  t.save
end



pokemon_moves_csv_text = File.read(Rails.root.join('lib', 'seeds', 'pokemon_moves.csv'))
pokemon_moves_csv = CSV.parse(pokemon_moves_csv_text, :headers => true, :encoding => 'ISO-8859-1' )
pokemon_moves_csv.each do |row|
  t = PokemonMove.new
  t.pokemon_id = row['pokemon_id']
  t.version_group_id = row['version_group_id']
  t.move_id = row['move_id']
  t.pokemon_move_method_id = row['pokemon_move_method_id']
  t.level = row['level']
  t.order = row['order']

  t.save
end

puts "There are now #{Pokemon.count} rows in the transactions table"
puts "There are now #{PokemonStat.count} rows in the transactions table"
puts "There are now #{PokemonAbility.count} rows in the transactions table"
puts "There are now #{Move.count} rows in the transactions table"
puts "There are now #{PokemonMove.count} rows in the transactions table"
