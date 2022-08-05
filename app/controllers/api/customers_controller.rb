class Api::CustomersController < ApplicationController
    before_action :set_customer, only: [:update, :show, :destroy]

    def index
        render json: Customer.all
    end

    def show
        render json: @customer
    end

    def create
        customer = Customer.new(customer_params)
        if customer.save
            render json: customer
        else
            render json: {errors: @customer.errors.full_messages}, status: 422
        end
    end

    def update
        if(@customer.update(customer_params))
            render json: @customer
        else
            render json: {errors: @customer.errors.full_message}, status: 422
        end
    end

    def destroy
        render json: @customer.destroy
    end

    private

    def set_customer
        @customer = Customer.find(params[:id])
    end

    def customer_params
        params.require(:customer).permit(:first_name, :last_name, :email, :company, :custtomer_cat, :phone, :mobile, :fax, :website, :street, :city, :state, :zip, :country)
    end

end
