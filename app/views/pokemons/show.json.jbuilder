json.pokemon do |pokemon|
  json.id @pokemon.id
  json.name @pokemon.name
  json.height @pokemon.height
  json.weight @pokemon.weight
  json.abilities @pokemon.abilities do |ability|
    json.name ability.name
  end
  json.base_exp @pokemon.base_exp
  json.order @pokemon.order
  json.image @pokemon.image
  json.image_file_name @pokemon.image_file_name
  json.image_content_type @pokemon.image_content_type
  json.image_file_size @pokemon.image_file_size
  json.image_updated_at @pokemon.image_updated_at
  json.types @pokemon.types do |type|
    json.name type.name
    json.id type.id
  end
  json.pokemon_stats @pokemon.pokemon_stats do |stat|
    json.pokemon_id stat.pokemon_id
    json.stat_id stat.stat_id
    json.base_stat stat.base_stat
    json.effort stat.effort
    json.name stat.stat.name
  end
  json.moves @pokemon.moves.uniq do |move|
    json.name move.name
    json.type move.type_id
    json.power move.power
    json.pp move.pp
    json.accuracy move.accuracy
    json.move_type move.type.name
    json.id move.id
  end
end
