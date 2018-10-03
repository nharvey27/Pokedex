require 'csv'

table = CSV.table("lib/seeds/pokemon_moves.csv", headers: :true)

table.delete_if do |row|
  row[:version_group_id] != 1
end

File.open("pokemon_moves.csv", 'w') do |f|
  f.write(table.to_csv)
end
