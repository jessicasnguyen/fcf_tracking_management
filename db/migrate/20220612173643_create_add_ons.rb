class CreateAddOns < ActiveRecord::Migration[6.1]
  def change
    create_table :add_ons do |t|
      t.string :name
      t.string :picture
      t.float :wsp
      t.string :category
      t.string :supplier
      t.integer :qty

      t.timestamps
    end
  end
end
