import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PAGES } from './pages';
import App from '../components/app/app';
// import HomePage from '../components/home-page/home-page';
// import AddPage from '../components/add-page/add-page';
// import EditPage from '../components/edit-page/edit-page';
// import FormsComponent from '../components/forms-component/forms-component';
import Page404 from '../components/page404/page404';

const WrappedApp = (Component, props) => (
  <App >
    <Component { ...props } />
  </App>
);

export default () => (
  <Switch>
    {/*<Route*/}
      {/*exact path={ PAGES.home.path }*/}
      {/*render={ props => WrappedApp(HomePage, props) }*/}
    {/*/>*/}
    {/*<Route*/}
      {/*exact path={ PAGES.add.path }*/}
      {/*render={ props => WrappedApp(FormsComponent, { newAd: true, ...props }) }*/}
    {/*/>*/}
    {/*<Route*/}
      {/*exact path={ PAGES.edit.path }*/}
      {/*render={ props => WrappedApp(FormsComponent, { newAd: false, ...props }) }*/}
    {/*/>*/}
    <Route
      exact path={ PAGES.page404.path }
      render={ props => WrappedApp(Page404, props) }
    />
    <Route
      path = '/'
      render={ () => (
        <Redirect to={ PAGES.page404.path } />
      ) }
    />
  </Switch>
);
