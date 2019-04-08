const Employees = (props) => {

  var employees = props.employees.map((employee) => {
    return(
      <div key={employee.id}>
      <h1>{employee.first_name}</h1>
      <p>{employee.email}</p>
      <p>{employee.phone}</p>
      <p>{employee.role}</p>
      </div>
    )
  })

  return(
    <div>
      {employees}
    </div>
  )
}
