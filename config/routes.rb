Rails.application.routes.draw do
  resources :houses
  get 'v1/houses', to:'houses#api'
end
