Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get 'chapter1', :to => 'chapter1#show'
  end
end
