import React, { Component } from "react";
import User from "./User"

class Table extends Component {

  mapingDataUser = () => this.props.data.map((value, key) => (
    <User
      key={key}
      userId={key}
      name={value.name}
      phone={value.phone}
      level={value.level}
      editToUser={(user) => this.props.editToTable(value)}
      editForm={() => this.props.changeStatusEdit()}
    />
  ))

  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover my-5">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.mapingDataUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
