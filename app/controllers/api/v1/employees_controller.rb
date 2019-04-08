class Api::V1::EmployeesController < Api::V1::BaseController 

  def index 
    render json: { employees: Employee.all, managers: Employee.where(role: "Manager")}

  end 

  def show 
    employee = Employee.find(params[:id])
  end 

  def manager_address_list 
    binding.pry 
    managers = Employee.where(role: "Manager") 
  end 

  def edit 
  end 

  def create 
    employee = Employee.new(employee_params)
    if employee.save 
      render json :employee
    else 
      render json: { status: 'ERROR' }
    end 
  end 

  def update 
    employee = Employee.find(params[:id]) 
    employee.update_attributes(employee_params)
    render json :employee
  end 

  def destroy 
    Employee.destroy(params[:id])
  end 

  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :role)
  end 

end 