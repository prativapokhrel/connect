class CompaniesController < ApplicationController
  def index 
    Company.all
  end 

  def show 
    company = Company.find(params[:id])
    render json: company
  end 

  def edit 
  end 

  def create 
    company = Company.new(company_params)
    if company.save 
      render json :company
    else 
      render json: { status: 'ERROR' }
    end 
  end 

  def update 
    company = Company.find(params[:id]) 
    company.update_attributes(company_params)
    render json :company
  end 

  def destroy 
    Company.destroy(params[:id])
  end 

  def company_params 
    params.require(:company).permit(:name, :phone, :address)
  end 
end 