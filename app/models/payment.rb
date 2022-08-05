class Payment < ApplicationRecord
  belongs_to :invoice_id
end
