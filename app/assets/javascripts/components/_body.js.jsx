class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      managers: [],
      addresses: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewEmployee = this.addNewEmployee.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.addManagersOptions = this.addManagersOptions.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // addManagersOptions(){
  //   fetch('/api/v1/employees/manager_address_list')
  //     .then((response) => {return response.json()})
  //     .then((data) => {this.setState({ managers: data})})
  // }

  handleFormSubmit(first_name, last_name, role) {
    let body = JSON.stringify({
      employee: { first_name: first_name, last_name: last_name, role: role }
    });

  //pending 
    $.ajax("/employees", {
      method: "POST",
      data: {
        body
      },
      success: function(response) {
        location.reload();
        // window.location = "/member/bookings/" + booking_id + "/approve";
      },
      error: function(error, status) {
        error_messages = error.responseJSON;
        alert("Error while processing.");
      }
    });
  }
  addNewEmployee(employee) {
    this.setState({
      employees: this.state.employees.concat(employee)
    });
  }

  // componentDidMount() {
  //   fetch("/employees")
  //     .then(response => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({ employees: data["employees"], managers: data["managers"], addresses: data["addresses"] });
  //       console.log(data["managers"]);
  //     });

  // }

  
  render() {
    return (
      <div>
        <NewEmployee
          handleFormSubmit={this.handleFormSubmit}
          managers={this.props.managers}
          addresses={this.props.addresses}
          
        />
        <Employees employees={this.state.employees} managers={this.state.managers} />
      </div>
    );
  }
}
