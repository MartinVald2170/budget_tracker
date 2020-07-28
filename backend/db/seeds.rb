for i in 1..10 
    Expense.create(
        title: Faker::JapaneseMedia::OnePiece.character,
        value: Faker::Types.rb_integer,
        due: Faker::Date.between(from: "2020-08-01", to: "2021-01-01")
    )

    puts "Created #{i} expenses"
end 