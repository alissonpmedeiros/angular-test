class DisciplinesController < ApplicationController

  def index
    @disciplines = Discipline.all

    respond_to do |format|
      format.html {}
      format.json { render json: @disciplines }
    end
  end

  def show
    @discipline = Discipline.find(params[:id])
    respond_to do |format|
      format.json { render json: @discipline }
    end
  end

  def create
    @discipline = Discipline.new(params.require(:discipline).permit(:name, :average, :workload))
    @discipline.save
    render json: @discipline.as_json, status: :ok
  end

  def update
    @discipline = Discipline.find(params[:id])
    @discipline.update_attributes(params.require(:discipline).permit(:name, :average, :workload))
    render json: @discipline.as_json, status: :ok
  end

  def destroy
    discipline = Discipline.find(params[:id])
    discipline.destroy
    head :no_content
  end
end
