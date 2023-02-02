# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

raise 'SEEDING NOT ALLOWED IN PRODUCTION' if Rails.env.production?

Todo.destroy_all

Todo.create! [
  {title: "Make Bed", description: "Make upon waking up", completed: false, due_date: Time.now},
  {title: "Walk Dog", description: "Don't forget leash and bags", completed: false, due_date: Time.now},
  {title: "Brush Teeth", description: "Wait till post coffee for this one", completed: false, due_date: Time.now}
]
