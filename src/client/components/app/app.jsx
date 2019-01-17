import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import {
  Grid, Navbar, Nav, NavItem, FormGroup, FormControl, Button
} from 'react-bootstrap';
import Flights from '../../components/flight-schedule/flight-schedule';
import './app.css';
import { selectGetFlightsInfo } from '../../redux/selectors/flight-selector';
import { getFlightsInfoAC } from '../../redux/actions/flight-actions';


const mapStateToProps = state => ({
  getFlightInfo: selectGetFlightsInfo(state)
});

const mapDispatchToProps = dispatch => ({
 getFlights: flights => dispatch(getFlightsInfoAC(flights))
});



export default class App extends Component {

  // async ComponentDidMount() {
  //   const { getFlights } = this.props;
  // }

  render() {
    return (
      <div >
        <header >
          <Navbar  collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href='/'>Flight Schedule</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse >
              <Nav>
                <NavItem href='/'>
                  All flights
                </NavItem>
              </Nav>
              <Nav>
                <NavItem href='/'>
                  Arrivals
                </NavItem>
              </Nav>
              <Nav>
                <NavItem href='/'>
                  Departures
                </NavItem>
              </Nav>
              <Nav>
                <NavItem href='/'>
                  Delays
                </NavItem>
              </Nav>
              <Navbar.Form pullRight>
                <FormGroup>
                  <FormControl type='text' placeholder='Search by a flight number'/>
                </FormGroup>
                <Button type="submit">Search</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>
        </header>
          <Grid>
            <Flights />
          </Grid>
      </div>
    );
  }
};
