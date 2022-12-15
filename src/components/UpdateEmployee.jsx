import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    //this.changeEmailHandler = this.changeEmailHandler.bind(this);

    this.updateEmployee = this.updateEmployee.bind(this);
  }
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      const employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
      });
    });
  }
  updateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log(employee);

    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push("/employees");
    });
  };
  changeFirstNameHandler = (e) => {
    this.setState({ firstName: e.target.value });
  };

  changeLastNameHandler = (e) => {
    this.setState({ lastName: e.target.value });
  };
  changeEmailHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  cancel() {
    this.props.history.push("/employees");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      placeholder="Email Address"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployee;
