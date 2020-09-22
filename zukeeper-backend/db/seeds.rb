# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

animals = [
  {
    "id": 1,
    "name": "Jimmy",
    "species_name": "Red Panda",
    "image_url": "https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1",
    "description": "not actually a panda",
    "diet": "herbivore",
    "donations": 140
  },
  {
    "id": 2,
    "name": "Timmy",
    "species_name": "Pangolin",
    "image_url": "https://i.pinimg.com/originals/bf/ff/93/bfff9395c6ae0d24534f030580924c7e.jpg",
    "description": "The Pangolin, otherwise known as the scaly anteater, is the only mammal in the world to be covered from head to toe in keratin scales (the same as human finger nails).",
    "diet": "carnivore",
    "donations": 10
  },
  {
    "id": 4,
    "name": "Kimmy",
    "species_name": "Gibbon",
    "image_url": "https://external-preview.redd.it/hqv76hMTwDpeM4o4jp55PIUuBCwTq5T66zy_0MJiVv8.jpg?auto=webp&s=36c0ae0727537b4a01c42cc32d37770f5b25e3e9",
    "description": "Gibbons communicate by singing! Gibbon vocalizations are often referred to as song because of the way they modulate their pitch. Gibbons sing alone and in duets and they start each day by singing at sunrise.",
    "diet": "omnivore",
    "donations": 20
  },
  {
    "id": 5,
    "name": "Wimmy",
    "species_name": "Wombat",
    "image_url": "https://live.staticflickr.com/4158/33752020123_eab52e719d_b.jpg",
    "description": "They have cube-shaped poop. Wombat poop is square. They mark their territories by defecating, and it's thought that the shape of their poop keeps it from rolling away.",
    "diet": "herbivore",
    "donations": 30
  },
  {
    "name": "Chimmy",
    "species_name": "Chinchilla",
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/51c-yODr17L._SX425_.jpg",
    "description": "Has to take dust baths to prevent mold!",
    "donations": 40,
    "diet": "herbivore",
    "id": 6
  },
  {
    "name": "Chimmy 2",
    "species_name": "Chinchilla",
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/51c-yODr17L._SX425_.jpg",
    "description": "Has to take dust baths to prevent mold!",
    "donations": 40,
    "diet": "herbivore",
    "id": 6
  }
]

animals.each do |animal_hash|
  species = Species.find_or_create_by(name: animal_hash[:species_name])

  Animal.create(
    name: animal_hash[:name],
    image_url: animal_hash[:image_url],
    description: animal_hash[:description],
    donations: animal_hash[:donations],
    diet: animal_hash[:diet],
    species_id: species.id
  )
end