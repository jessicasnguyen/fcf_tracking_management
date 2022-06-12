class CreateVases < ActiveRecord::Migration[6.1]
  def change
    create_table :vases do |t|
      t.string :name
      t.string :picture
      t.float :wsp
      t.string :size
      t.string :category
      t.integer :qty

      t.timestamps
    end
  end
end
