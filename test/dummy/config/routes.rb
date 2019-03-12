Rails.application.routes.draw do
  mount Reativo::Engine => "/reativo"
  resources :todos

  root to: "todos#index"
end
