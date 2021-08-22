import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
//Screens
import ListScreen from './screens/ListScreen.js'
import DetailScreen from './screens/DetailScreen.js'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={ListScreen} exact />
          <Route path='/:id' component={DetailScreen} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;