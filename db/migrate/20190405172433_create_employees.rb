class CreateEmployees < ActiveRecord::Migration[5.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :role
      t.references :address, foreign_key: true 
      t.references :manager, index: true
      t.timestamps
    end
  end
end
