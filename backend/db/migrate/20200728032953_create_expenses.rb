class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :title
      t.integer :value
      t.string :due

      t.timestamps
    end
  end
end
