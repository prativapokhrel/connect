class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :address_1
      t.string :address_2
      t.string :zip
      t.string :postcode

      t.timestamps
    end
  end
end
