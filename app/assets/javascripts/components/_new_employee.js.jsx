function NewEmployee(props) {
  let formFields = {}
  var manager_items = props.managers
  var address_items = props.addresses
  
  var managers = [];
  var addresses = [];
  
  for (var [index, value] of manager_items.entries()) {
    managers.push(<option value={value["id"]}>{value["first_name"] + " " + value["last_name"]}</option>)
  }

  for (var [index, value] of address_items.entries()) {
    addresses.push(<option value={value["id"]}>{value["address_1"] + ", " + value["address_2"]}</option>)
  }
  
  return(
    <form onSubmit={ (e) => {
      props.handleFormSubmit(formFields.first_name.value, formFields.last_name.value, formFields.role.value, formFields.manager_id.value); 
        e.target.removeEventListener();}
      }>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>First Name</label>

              <input ref={input => formFields.first_name = input} className="form-control" placeholder='Enter the first name of employee' />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input ref={input => formFields.last_name = input} className="form-control" placeholder='Enter the last name of employee' />
            </div> 
            <div className="form-group">
              <label>Role</label>
              <select value="Employee" onChange={props.handleChange} className="form-control">
                <option value='Employee'>Employee</option>
                <option value='Manager'>Manager</option>
              </select>
            </div>
            <div className="form-group">
              <label>Manager</label>
              <select value="" onChange={props.handleChange} className="form-control">
                {managers}
              </select>
            </div>
            <div className="form-group">
              <label>Address</label>
              <select value="" onChange={props.handleChange} className="form-control">
                {addresses}
              </select>
            </div>
              <button>Submit</button>
          </div>
        </div>
      </div>
      
    </form>
  )
}