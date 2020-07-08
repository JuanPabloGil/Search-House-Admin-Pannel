class HousesController < ApplicationController

  before_action :set_house, only: [:show, :edit, :update, :destroy]
  # before_action :authenticate_user!

  def index
    @houses = current_user.houses.all
  end

  def api
    @houses = House.all 
    if current_user
      @favorites = current_user.favorites.all
    else
      @favorites = []
    end
    render json: {
      :favorites =>
        @favorites,
      :houses =>  
        @houses,
    }.to_json 
  end

  def show
  end


  def new
    @house = House.new
  end


  def edit
  end

  def create
    @house = current_user.houses.new(house_params)

    respond_to do |format|
      if @house.save
        format.html { redirect_to houses_path, notice: 'House was successfully created.' }
        format.json { render :show, status: :created, location: @house }
      else
        format.html { render :new }
        format.json { render json: @house.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @house.update(house_params)
        format.html { redirect_to houses_path, notice: 'House was successfully updated.' }
        format.json { render :show, status: :ok, location: @house }
      else
        format.html { render :edit }
        format.json { render json: @house.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @house.destroy
    respond_to do |format|
      format.html { redirect_to houses_url, notice: 'House was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_house
      @house = House.find(params[:id])
    end

    def house_params
      params.require(:house).permit(:title, :price, :about)
    end
end
