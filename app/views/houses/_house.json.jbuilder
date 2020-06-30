json.extract! house, :id, :name, :price, :type, :created_at, :updated_at
json.url house_url(house, format: :json)
