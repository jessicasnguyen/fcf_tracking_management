Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :customers do
      resources :invoices do
        resources :items
        resources :payments
      end
    end

    get '/open', to:'invoices#open_invoices'
    get '/closed', to:'invoices#closed_invoices'
    get '/invoices', to:'invoices#all_invoices'
    
  end

end
