class CreateWraps < ActiveRecord::Migration[6.1]
  def change
    create_table :wraps do |t|
      t.string :color
      t.string :picture
      t.float :wsp
      t.string :material
      t.integer :qty

      t.timestamps
    end
  end
end
