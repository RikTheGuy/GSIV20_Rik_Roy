import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Screens
import ListScreen from './screens/ListScreen.js'
import DetailScreen from './screens/DetailScreen.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ListScreen} exact />
        <Route path='/:id' component={DetailScreen} />
      </Switch>
    </Router>
  );
}

export default App;