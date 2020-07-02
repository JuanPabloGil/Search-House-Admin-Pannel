Rails.application.routes.draw do

  get 'v1/houses', to:'houses#api'

  # get '*page', to: 'static#index', constrains: ->(req) do 
  #   !req.xhr? && req.format.html?
  # end

  resources :houses
  root 'static#index'
  
end
