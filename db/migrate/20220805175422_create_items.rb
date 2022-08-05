class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.belongs_to :invoice, null: false, foreign_key: true
      t.string :name
      t.float :price
      t.integer :qty
      t.text :description
      t.datetime :service_date
      t.string :category
      t.string :floranext

      t.timestamps
    end
  end
end
