require 'rails_helper'
require_relative '../support/devise'


RSpec.describe FavoritesController, type: :controller do
    login_user
    

    describe 'GET #INDEX ' do
        it 'Should return 200:OK on index if you are logged in' do
            get :index
            expect(response).to be_success
        end
    end

end
