class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def show
        render json: find_user
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def find_user
        User.find_by(id: session[:user_id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
