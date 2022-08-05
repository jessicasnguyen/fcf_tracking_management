class Api::InvoicesController < ApplicationController
    # before_action :set_customer, only: [:create]
    before_action :set_invoice, only: [:update, :show, :destroy]

    def index
        render json: Invoice.all
    end

    def show
        render json: @invoice
    end

    def create
        invoice = Invoice.new(invoice_params)
        if invoice.save
            render json: invoice
        else
            render json: {errors: @invoice.errors.full_messages}, status: 422
        end
    end

    def update
        if(@invoice.update(invoice_params))
            render json: @invoice
        else
            render json: {errors: @invoice.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @invoice.destroy
    end

    def open
        render json: Invoice.open
    end

    def closed
        render json: Invoice.closed
    end

    private

    # def set_customer
    #     @customer = Customer.find(params[:customer_id])
    # end

    def set_invoice
        @invoice = Invoice.find(params[:id])
    end

    def invoice_params
        params.require(:invoice).permit(:customer_id, :terms, :summary, :tax)
    end

end
