Rails.application.routes.draw do
  root "pages#home"
  get '*path' => 'pages#home'

  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        resources :todos
      end
    end
  end

end
