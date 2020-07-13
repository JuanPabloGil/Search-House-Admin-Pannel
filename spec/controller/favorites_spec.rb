require 'rails_helper'
require_relative '../support/devise'

RSpec.describe FavoritesController, type: :controller do
  describe 'GET with a proper login ' do
    login_user

    context 'Test Favorites' do
      it 'should have a current_user' do
        expect(subject.current_user).to_not eq(nil)
      end

      it 'Should return 200:OK on index if you are logged in' do
        get :index
        expect(response).to be_success
      end
    end
  end

  context 'Test Favorites not logged in' do
    it 'Should return 301' do
      get :index
      expect(response).to be_redirect
    end
  end
end
