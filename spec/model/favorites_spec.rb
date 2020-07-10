require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.new(id: 1, name: 'user1', email: 'user1@example.com', password: '12345678') }

  let(:house) { House.new(id: 1,
                             user_id: '1',
                             title: 'Greate House', price:1200,
                             about: 'lorem ip sum rem ip sum lorem ilorem ip sum rem p sum rem iplorem ip sum rem ' ) }

  let(:favorite) { Favorite.new(user_id: user.id, house_id: house.id) }

  it 'Check if is a good relationship valid' do
    user.save
    house.save
    favorite.save
    expect(favorite).to be_valid
  end

  it 'Check if is a bad relationship valid' do
    user.save
    favorite.save
    expect(favorite).not_to be_valid
  end

end