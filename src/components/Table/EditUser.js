import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userObj.id,
      name: this.props.userObj.name,
      phone: this.props.userObj.phone,
      level: this.props.userObj.level,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="col-12">
        <form method="post">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header text-center">Edit User</div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  onChange={(e) => this.handleChange(e)}
                  defaultValue={this.props.userObj.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  onChange={(e) => this.handleChange(e)}
                  defaultValue={this.props.userObj.phone}
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <select
                  onChange={(e) => this.handleChange(e)}
                  defaultValue={this.props.userObj.level}
                  className="custom-select"
                  name="level"
                  required
                >
                  <option>Selected</option>
                  <option>Admin</option>
                  <option>Moderator</option>
                  <option>Member</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="reset"
                  value="Save"
                  className="btn btn-block btn-danger"
                  onClick={() => this.props.editFormStatus()}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;
