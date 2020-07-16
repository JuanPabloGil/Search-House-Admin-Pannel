json.extract! house, :id, :title, :price, :about, :created_at, :updated_at
json.url house_url(house, format: :json)
