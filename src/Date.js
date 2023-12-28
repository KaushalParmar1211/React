import { Component } from "react";

class Date extends Component {
  render() {
    const { day, month, year } = this.props.data;
    return (
      <>
        <ul>
          <li>Day :{day}</li>
          <li>Month :{month}</li>
          <li>Year :{year}</li>
        </ul>
      </>
    );
  }
}

export default Date;
