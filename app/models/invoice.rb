class Invoice < ApplicationRecord
  belongs_to :customer
  # has_many :line_items, dependent: :destroy
  has_many :payments, dependent: :destroy

  def self.open_invoices
    Invoice.find_by_sql("SELECT inv.id, cus.first_name, cus.last_name, cus.company, inv.invoice_date, inv.terms, CAST(SUM(itm.price) AS NUMERIC(18,2)) AS total, inv.paid
    FROM invoices inv
    INNER JOIN customers cus
      ON cus.id = inv.customer_id
    INNER JOIN items itm
      ON itm.invoice_id = inv.id
    WHERE inv.paid IS FALSE
    GROUP BY inv.id, cus.first_name, cus.last_name, cus.company, inv.invoice_date, inv.terms
    ORDER BY inv.id ASC")
  end

  def self.closed_invoices
    Invoice.find_by_sql("SELECT inv.id, cus.first_name, cus.last_name, cus.company, inv.invoice_date, inv.terms, CAST(SUM(itm.price) AS NUMERIC(18,2)) AS total, inv.paid
    FROM invoices inv
    INNER JOIN customers cus
      ON cus.id = inv.customer_id
    INNER JOIN items itm
      ON itm.invoice_id = inv.id
    WHERE inv.paid IS TRUE
    GROUP BY inv.id, cus.first_name, cus.last_name, cus.company, inv.invoice_date, inv.terms
    ORDER BY inv.id ASC")
  end

  def self.all_invoices
    Invoice.find_by_sql("SELECT inv.id, cus.first_name, cus.last_name, cus.company, inv.invoice_date, inv.terms, CAST(SUM(itm.price) AS NUMERIC(18,2)) AS total, inv.paid
    FROM invoices inv
    INNER JOIN customers cus
      ON cus.id = inv.customer_id
    INNER JOIN items itm
      ON itm.invoice_id = inv.id
    GROUP BY inv.id, cus.first_name, cus.last_name, cus.company, inv.invoice_date, inv.terms
    ORDER BY inv.id ASC")
  end

end
