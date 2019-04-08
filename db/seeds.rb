# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
address_1 = Address.create!(address_1: "Kathmandu", address_2: "Lalitpur", zip: "123", postcode: "44600") 
address_2 = Address.create!(address_1: "Kathmandu", address_2: "Bhaktapur", zip: "124", postcode: "44600") 

manager = Employee.create!(first_name: "Manager", last_name: "Emp", email: "manager@gmail.com", phone: "1234", role: "Manager", address: address_1)
5.times do |i|
  employee = Employee.create!(first_name: "Employee#{i}", last_name: "Emp", email: "emp#{i}@gmail.com", phone: "12345", role: "Employee", address: address_2, manager_id: manager.id)
end 
company = Company.create!(name: "Hitech", phone: "111", address: address_1)
company = Company.create!(name: "tech", phone: "112", address: address_2)

