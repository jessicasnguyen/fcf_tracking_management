class CreateBaskets < ActiveRecord::Migration[6.1]
  def change
    create_table :baskets do |t|
      t.string :name
      t.string :picture
      t.float :wsp
      t.string :size
      t.integer :qty

      t.timestamps
    end
  end
end
