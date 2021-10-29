Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
