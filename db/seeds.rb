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



########## CUSTOMERS ##########

10.times do
    c = Customer.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        company: Faker::Company.name,
        customer_cat: Faker::Company.industry,
        phone: Faker::PhoneNumber.phone_number,
        mobile: Faker::PhoneNumber.cell_phone,
        fax: Faker::PhoneNumber.phone_number,
        website: Faker::Internet.domain_name,
        street: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state,
        zip: Faker::Address.zip_code,
        country: 'United States',
    )
end

########## INVOICES ##########

15.times do
    inv = Invoice.create(
        customer_id: Faker::Number.between(from: 1, to:10),
        terms: 30,
        invoice_date: Faker::Date.backward(days: 30),
        summary: Faker::Lorem.paragraph(sentence_count: 3),
        tax: 6.35,
        paid: Faker::Boolean.boolean(true_ratio: 0.2),
    )
end

########## ITEMS ##########

50.times do
    itm = Item.create(
        invoice_id: Faker::Number.between(from: 1, to: 15),
        name: Faker::Commerce.product_name,
        price: Faker::Commerce.price,
        qty: Faker::Number.non_zero_digit,
        description: Faker::Lorem.sentence,
        service_date: Faker::Date.in_date_period,
        category: Faker::Commerce.department,
    )
end

########## PAYMENTS ##########

5.times do
    pmt = Payment.create(
        invoice_id: Faker::Number.between(from: 1, to: 15),
        date: Faker::Date.in_date_period,
        amount: Faker::Commerce.price,
    )
end

########## MESSAGES ##########

puts "Flowers: #{Flower.all.length}"
puts "Customers: #{Customer.all.length}"
puts "Invoices: #{Invoice.all.length}"
puts "Items: #{Item.all.length}"
puts "Payments: #{Payment.all.length}"