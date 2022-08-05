class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :company
      t.string :customer_cat
      t.string :phone
      t.string :mobile
      t.string :fax
      t.string :website
      t.text :street
      t.string :city
      t.string :state
      t.integer :zip
      t.string :country

      t.timestamps
    end
  end
end
