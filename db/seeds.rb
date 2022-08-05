# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(email:'test@test.com', password:123456)

########## FLOWERS ##########

Flower.create(name:'Alstroemeria', picture:'https://www.anniesannuals.com/signs/a/images/alstroemeria_tricolor_bloom_01.jpg', wsp:1.10, category:'Regular', qty:0)

Flower.create(name:'Amaranthus', picture:'https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw885b3c4f/images/products/flowers/01701_01_coralfountains.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196', wsp:1.40, category:'Regular', qty:0)

Flower.create(name:'Anemone', picture:'https://www.edenbrothers.com/store/media/Bulbs-Flowers/Anemone-de-Caen-Blue-White-Mix-2.jpg', wsp:0, category:'Regular', qty:0)

Flower.create(name:'Asiatic Lily', picture:'https://h2.commercev3.net/cdn.springhillnursery.com/images/800/64379A.jpg', wsp:2.00, category:'Regular', qty:0)

Flower.create(name:'Bells of Ireland', picture:'https://www.johnnyseeds.com/on/demandware.static/-/Library-Sites-JSSSharedLibrary/default/dwf142e1b6/images/culture/14-bells-of-ireland.jpg', wsp:1.30, category:'Regular', qty:0)

puts "Flowers: #{Flower.all.length}"