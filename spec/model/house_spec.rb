require 'rails_helper'

RSpec.describe House, type: :model do
  let(:user) { User.new(id: 1, name: 'useristolong', email: 'user@example.com', password: '12345678') }
  let(:house) { House.new(id: 1,
                             user_id: '1',
                             title: 'Greate House', price:1200,
                             about: 'lorem ip sum rem ip sum lorem ilorem ip sum rem p sum rem iplorem ip sum rem ' ) }

  it 'Check for valid House structure ' do
    user.save
    house.save
    expect(house).to be_valid
  end

  it 'Check if house is valid if the user doesnt exist  ' do
    house.save
    expect(house).not_to be_valid
  end

  it 'Expect invalid content of house (too long ) ' do
    user.save
    house.about = 'a' * 1001
    house.save
    expect(house).not_to be_valid
  end
end