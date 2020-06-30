class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses do |t|
      t.string :name
      t.integer :price
      t.string :type

      t.timestamps
    end
  end
end
