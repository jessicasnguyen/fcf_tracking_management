class CreateRibbons < ActiveRecord::Migration[6.1]
  def change
    create_table :ribbons do |t|
      t.string :color
      t.string :picture
      t.float :wsp
      t.string :size
      t.integer :qty

      t.timestamps
    end
  end
end
