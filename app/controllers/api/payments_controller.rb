class Api::PaymentsController < ApplicationController
    before_action :set_invoice, except: [:find_payment]
    before_action :set_payment, only: [:show, :update, :destroy]

    def find_payment
        render json: Payment.find(params[:id])
    end

    def index
        render json: @invoice.payments
    end

    def show
        render json: @payment
    end

    def create
        @payment = @invoice.payments.new(payment_params)
        if(@payment.save)
            render json: @payment
        else
            render json: {errors: @payment.errors.full_messages}, status: 422
        end
    end

    def update
        if(@payment.update(payment_params))
            render json: @payment
        else
            render json: {errors: @payment.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @payment.destroy
    end

    private

    def set_invoice
        @invoice = Invoice.find(params[:invoice_id])
    end

    def set_payment
        @payment = @invoice.payments.find(params[:id])
    end

    def payment_params
        params.require(:payment).permit(:date, :amount)
    end

end
