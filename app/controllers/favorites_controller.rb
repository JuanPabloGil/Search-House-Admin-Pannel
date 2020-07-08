class FavoritesController < ApplicationController
    def create 
        @favorite = current_user.favorites.new(favorite_params)
       
        if @favorite.save and !current_user.favorites.exist?(favorite_params)
            redirect_to root_path
        else
            redirect_to root_path
        end 
    end

    private
    def favorite_params
        params.require(:favorite).permit(:house_id)
    end
end
