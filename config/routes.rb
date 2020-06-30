Rails.application.routes.draw do
  resources :houses
  namespace :v1, defaults: {format: 'json'} do
    get 'houses', to:'houses#index'
  end
end
