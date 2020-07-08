Rails.application.routes.draw do
  
  root 'static#index'
  devise_for :users
  resources :houses
  resources :favorites, only: [:create, :destroy, :index]

  
  get 'favorite', to: 'favorites#index' 

  get 'v1/houses', to:'houses#api'
  
  # get '*page', to: 'static#index', constrains: ->(req) do 
  #   !req.xhr? && req.format.html?
  # end
  
end
