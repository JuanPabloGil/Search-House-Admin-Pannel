module ControllerMacros
  def login_user
    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      user = FactoryBot.create(:user)
      sign_in user
    end
  end

  
  def create_house_f
    before(:each) do 
      house = FactoryBot.create(:house)
    end
  end
end
