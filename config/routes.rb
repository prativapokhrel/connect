Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'site#index'
  
  namespace :api do
    namespace :v1 do
      resources :companies
      resources :employees  do 
        get 'manager_address_list', on: :collection
      end 



    end
  end
end
