class Api::ItemsController < ApplicationController
    before_action :set_invoice, except: [:find_item]
    before_action :set_item, only: [:show, :update, :destroy]

    def find_item
        render json: Item.find(params[:id])
    end

    def index
        render json: @invoice.items
    end

    def show
        render json: @item
    end

    def create
        @item = @invoice.items.net(item_params)
        if(@item.save)
            render json: @item
        else
            render json: {errors: @item.errors.full_messages}, status: 422
        end
    end

    def update
        if(@item.update(item_params))
            render json: @item
        else
            render json: {errors: @item.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @item.destroy
    end

    private

    def set_invoice
        @invoice = Invoice.find(params[:invoice_id])
    end

    def set_item
        @item = @invoice.items.find(params[:id])
    end

    def item_params
        params.require(:item).permit(:name, :price, :qty, :description, :service_date, :category)
    end

end
