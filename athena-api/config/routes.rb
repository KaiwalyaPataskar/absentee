Rails.application.routes.draw do
  constraints subdomain: 'api' do
  end
  api_version(:module => "V1", :path => {:value => "v1"}) do
  	# resources :users
  	resources :schools do
  		member do
  			post :import
  		end
  		resources :users
  		resources :classes do
  			resources :divisions
  		end
  	end
  end  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
