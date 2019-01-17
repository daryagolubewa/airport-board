import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Flights extends Component {
  render() {
    return (
      <ReactTable
        // data={this.props.flightsInfo}
        columns={[
          {
            columns: [
              {
                Header: "Time Flight",
                accessor: "time"
              },
              {
                Header: "City",
                accessor: "city"
              },
              {
                Header: "Airline",
                accessor: "airline"
              },
              {
                Header: "Flight Number",
                accessor: "flightNumber"
              },
              {
                Header: "Status",
                accessor: "status"
              },
            ]
          }
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />

    )
  }
}
