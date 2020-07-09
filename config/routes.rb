Rails.application.routes.draw do
  
  root 'static#index'
  
  devise_for :users
  resources :houses

  resources :favorites, only: [:create, :destroy, :index]

  
  get 'favorite_house', to: 'favorites#index' 

  get 'v1/houses', to:'houses#api'
  
  
end
