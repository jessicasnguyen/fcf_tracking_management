class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.belongs_to :invoice, null: false, foreign_key: true
      t.datetime :date
      t.float :amount

      t.timestamps
    end
  end
end
