require 'rails_helper'
require_relative '../support/devise'

def create_house
  post :create, params: { house: { title: 'New House',
                                   price: 1500,
                                   about: 'This is a description of the house',
                                   category: 'House' } }
end

RSpec.describe HousesController, type: :controller do
  login_user

  describe 'GET #INDEX ' do
    it 'Should return 200:OK on index if you are logged in' do
      get :index
      expect(response).to be_success
    end
  end

  describe 'GET #API' do
    it 'Should return 200:OK on api if you are logged in' do
      get :api
      expect(response).to be_success
    end
  end

  describe 'POST #CREATE ' do
    it 'should return +1 if a house is succesfully created' do
      expect { create_house }.to change { House.count }.by(1)
    end
  end

  describe 'POST #DESTROY ' do
    it 'should return -1 if a house is succesfully DESTROYED' do
      expect { create_house }.to change { House.count }.by(1)
      expect { delete :destroy, params: { id: 1 } }.to change { House.count }.by(-1)
    end
  end
end
