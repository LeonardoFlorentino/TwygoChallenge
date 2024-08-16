Rails.application.routes.draw do
  resources :courses, only: [:index, :show, :create, :update, :destroy] do
    member do
      put 'url', to: 'courses#add_url'
      delete 'url/:url_id', to: 'courses#remove_url'
    end
  end
end
