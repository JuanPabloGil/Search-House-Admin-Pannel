require 'rails_helper'
require_relative '../support/devise'

RSpec.describe HousesController, type: :controller do
  describe 'GET with a proper login ' do
    login_user
    context 'Test Houses' do
      it 'Should return 200:OK on index if you are logged in' do
        get :index
        expect(response).to be_success
      end

      it 'Should not return 200:OK on create (Bad request )' do
        post :create, params: { house: { title: 'Greate House',
                                         about: 'This is a good house with pool',
                                         price: 1200,
                                         user_id: 1 } }
        expect(response).not_to be_success
      end
    end
  end
end
