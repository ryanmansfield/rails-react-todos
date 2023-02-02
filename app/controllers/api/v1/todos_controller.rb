class Api::V1::TodosController < ApplicationController
  before_action :set_todo, only: [:show]

  def index
    todos = Todo.all
    render json: todos
  end

  def show
    if @todo
      render json: @todo
    else
      render json: @todo.errors
    end
  end

  def create
    @todo = Todo.new(todo_params)


    if @todo.save
      render json: @todo
    else
      render json: @todo.errors
    end
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.permit(:title, :description, :completed, :due_date)
  end

end
