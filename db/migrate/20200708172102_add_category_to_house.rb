class AddCategoryToHouse < ActiveRecord::Migration[5.2]
  def change
    add_column :houses, :category, :string 
  end
end
