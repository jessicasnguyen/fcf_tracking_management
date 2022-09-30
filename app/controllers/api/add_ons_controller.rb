class Api::AddOnsController < ApplicationController
    before_action :set_add_on, only: [:update, :show, :destroy]

    def index
        render json: Add_On.all
    end

    def show
        render json: @add_on
    end

    def create
        add_on = Add_On.new(add_on_params)
        if add_on.save
            render json: add_on
        else
            render json: {errors: @add_on.errors.full_messages}, status: 422
        end
    end

    def update
        if(@add_on.update(add_on_params))
            render json: @add_on
        else
            render json: {errors: @add_on.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @add_on.destroy
    end

    private

    def set_add_on
        @add_on = Add_On.find(params[:id])
    end

    def add_on_params
        params.require(:add_on).permit(:name, :picture, :wsp, :category, :supplier, :qty)
    end
end
