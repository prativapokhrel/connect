function NewEmployee(props) {
  let formFields = {}
  var items = props.managers
  var managers = [];
  for (var [index, value] of items.entries()) {
    managers.push(<option value={value["id"]}>{value["first_name"] + value["last_name"]}</option>)
  }
  
  handleChange= (event) => {
    this.setState
    console.log(event.targer.value);
  }

  return(
    <form onSubmit={ (e) => {
      props.handleFormSubmit(formFields.first_name.value, formFields.last_name.value, formFields.role.value, formFields.manager_id.value); 
        e.target.removeEventListener();}
      }>
      <input ref={input => formFields.first_name = input} placeholder='Enter the first name of employee' />
      <input ref={input => formFields.last_name = input} placeholder='Enter the last name of employee' />
      <input ref={input => formFields.role = input} placeholder='Enter the role of employee' />
      <select value="" onChange={handleChange}>
        {managers}
      </select>
      <input ref={input => formFields.address = input} placeholder='Enter the role of employee' />
      <button>Submit</button>
      
    </form>
  )
}