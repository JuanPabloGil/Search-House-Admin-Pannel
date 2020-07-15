class FavoritesController < ApplicationController
  before_action :authenticate_user!

  def index
    @favorites = current_user.favorites.pluck(:house_id)
    @houses = House.find(@favorites)
    @list_of_favorites = current_user.favorites
  end

  def create
    @favorite = current_user.favorites.new(favorite_params)
    respond_to do |format|
          if @favorite.save  and !current_user.favorites.exists?(favorite_params)
            format.html { redirect_to houses_path, notice: 'House added to favorites' }
            format.json { render json: {status: :created} }
          else
            format.html { redirect_to houses_path, notice: 'Error on creation ' }
            format.json { render json: @favorite.errors, status: :unprocessable_entity }
          end
    end
  end

  def destroy
    @favorite = current_user.favorites.find_by(favorite_params)
    if @favorite.delete
      
    end
  end

  private

  def favorite_params
    params.permit(:house_id)
  end
end
