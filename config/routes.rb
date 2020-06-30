Rails.application.routes.draw do
  root 'static#index'
  
  get 'v1/houses', to:'houses#api'
  resources :houses
  
end
