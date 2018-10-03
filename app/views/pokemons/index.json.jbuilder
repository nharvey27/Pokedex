json.array!(@pokemons) do |pokemon|
  json.id pokemon.id
  json.name pokemon.name
  json.image pokemon.image
  json.pokemon_stats pokemon.pokemon_stats do |stat|
    json.pokemon_id stat.pokemon_id
    json.stat_id stat.stat_id
    json.base_stat stat.base_stat
    json.effort stat.effort
    json.name stat.stat.name
  end

  json.types pokemon.types do |type|
    json.name type.name
  end
end
