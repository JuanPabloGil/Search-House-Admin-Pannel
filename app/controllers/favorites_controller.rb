class FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
        @favorites = current_user.favorites.pluck(:house_id)
        @houses = House.find(@favorites)
        @list_of_favorites = current_user.favorites
        # render component: 'Favorites', props: { houses: @houses, favorites: @list_of_favorites }
    end

    def create 
        @favorite = current_user.favorites.new(favorite_params)
       
        if @favorite.save and !current_user.favorites.exists?(favorite_params)
            redirect_to root_path
        else
            redirect_to root_path
        end 
    end

    def destroy 
        @favorite = current_user.favorites.find_by(favorite_params)
       
        if @favorite.delete
            redirect_to root_path
        else
            redirect_to root_path
        end 
    end

    private
    def favorite_params
        params.permit(:house_id)
    end
end
