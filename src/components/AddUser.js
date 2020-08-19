// import React, { Component } from "react";

// class AddUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: false,
//     };
//   }

//   changeStatus = () => {
//     this.setState({
//       status: !this.state.status,
//     });
//   };

//   hideNSeek = () => {
//     if (this.state.status === true) {
//       return (
//         <button
//           className="btn btn-block btn-outline-secondary"
//           onClick={() => this.changeStatus()}
//         >
//           Close
//         </button>
//       );
//     } else {
//       return (
//         <button
//           className="btn btn-block btn-outline-info"
//           onClick={() => this.changeStatus()}
//         >
//           Add
//         </button>
//       );
//     }
//   };

//   showForm = () => {
//     if (this.state.status === true) {
//       return (
//         <div className="card text-dark bg-light mb-5 mt-3">
//           <div className="card-header">Add new user</div>
//           <div className="card-body">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 aria-describedby="helpId"
//                 placeholder="Name"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 aria-describedby="helpId"
//                 placeholder="Phone"
//               />
//             </div>
//             <div className="form-group">
//               <select className="custom-select">
//                 <option>Selected</option>
//                 <option defaultValue="1">Admin</option>
//                 <option defaultValue="2">Moderator</option>
//                 <option defaultValue="3">Normal</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <button className="btn btn-block btn-danger">ADD</button>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//         <div>
//             {this.hideNSeek()}
//             {this.showForm()}
//         </div>
//     )
//   }
// }

// export default AddUser;

import React, { Component } from "react";

class AddUser extends Component {
  changeForm = () => {
    if (this.props.status === true) {
      return (
        <div className="col">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Add new user</div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="helpId"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="helpId"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <select className="custom-select">
                  <option>Selected</option>
                  <option defaultValue="1">Admin</option>
                  <option defaultValue="2">Moderator</option>
                  <option defaultValue="3">Member</option>
                </select>
              </div>
              <div className="form-group">
                <button className="btn btn-block btn-light">ADD</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.changeForm()}</div>;
  }
}

export default AddUser;
