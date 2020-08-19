import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
    };
  }

  changeButton = () => {
    if (this.props.status === true) {
      return (
        <button
          className="btn btn-block btn-outline-success"
          onClick={() => this.props.changeButton()}
        >
          Close
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-block btn-outline-info"
          onClick={() => this.props.changeButton()}
        >
          Add
        </button>
      );
    }
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      tempValue: e.target.value,
    })
    this.props.check(this.state.tempValue)
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <div className="btn-group">
            <input
              type="text"
              placeholder="Type keyword"
              className="form-control md-lg"
              onChange={(e) => this.handleChange(e)}
            />
            <button
              type="submit"
              className="btn btn-info"
              onClick={(dl) => this.props.check(this.state.tempValue)}
            >
              Search
            </button>
          </div>
        </div>
        {this.changeButton()}
      </div>
    );
  }
}

export default Searchbar;
