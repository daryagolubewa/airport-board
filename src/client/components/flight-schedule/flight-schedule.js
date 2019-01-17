import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Flights extends Component {
  render() {
    console.log('yes', this.props.getFlightInfo)
    return (
      <ReactTable
        getFlightInfo={this.props.getFlightInfo}
        columns={[
          {
            columns: [
              {
                Header: "Time Flight",
                accessor: "time"
              },
              {
                Header: "Airport",
                accessor: "airport"
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
        defaultPageSize={20}
        className="-striped -highlight"
      />

    )
  }
}
