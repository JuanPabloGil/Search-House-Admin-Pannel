class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses do |t|
      t.string :title
      t.integer :price
      t.string :about
      t.integer :user_id
      t.timestamps
    end
    add_index :houses, :user_id
  end
end
