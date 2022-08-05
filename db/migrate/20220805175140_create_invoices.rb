class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.belongs_to :customer, null: false, foreign_key: true
      t.integer :terms
      t.datetime :invoice_date
      t.boolean :paid
      t.text :summary

      t.timestamps
    end
  end
end
