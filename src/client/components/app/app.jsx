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

class App extends Component {

  async componentDidMount() {
    const { getFlights } = this.props;
    const arriveUrl = 'https://aviation-edge.com/v2/public/timetable?key=c2d44c-455a0a&iataCode=JFK&type=arrival';
    const res = await fetch(arriveUrl);
    let arrivalInfo = await res.json();
    const arrivedFlights = arrivalInfo.map(info => {
      return {
        time: info.arrival.scheduledTime,
        airport: info.arrival.iataCode,
        airline: info.airline.name,
        flightNumber: info.flight.number,
        status: info.status,
        type: info.type
      }
    });
    console.log('aa', arrivedFlights);
    getFlights(arrivedFlights);

  }

  render() {
    console.log('fkss', this.props);
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
            <Flights getFlightInfo={this.props.getFlightInfo}/>
          </Grid>
      </div>
    );
  }
};

const MainPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default MainPage;
