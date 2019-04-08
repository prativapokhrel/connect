class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      managers: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewEmployee = this.addNewEmployee.bind(this);
    // this.addManagersOptions = this.addManagersOptions.bind(this)
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
    fetch("/api/v1/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(employee => {
        this.addNewEmployee(employee);
      });
    console.log(first_name, last_name, role);
  }

  addNewEmployee(employee) {
    this.setState({
      employees: this.state.employees.concat(employee)
    });
  }

  componentDidMount() {
    fetch("/api/v1/employees.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ employees: data["employees"], managers: data["managers"] });
        console.log(data["managers"]);
      });

  }

  render() {
    return (
      <div>
        <NewEmployee
          handleFormSubmit={this.handleFormSubmit}
          managers={this.state.managers}
        />
        <Employees employees={this.state.employees} managers={this.state.managers} />
      </div>
    );
  }
}
