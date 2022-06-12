class CreateFlowers < ActiveRecord::Migration[6.1]
  def change
    create_table :flowers do |t|
      t.string :name
      t.string :picture
      t.float :wsp
      t.string :category
      t.integer :qty

      t.timestamps
    end
  end
end
