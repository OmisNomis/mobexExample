import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { decorate, observable } from 'mobx'
import { observer, Provider } from 'mobx-react'

import Hashrate from './Hashrate'
import Earnings from './Earnings'
import Login from './Login'
import appState from './store'


class Main extends Component {

  render() {
    //   if (new Date().getSeconds() % 2 === 0) {
    //     return <Login />
    //   } else {
        return (
            <div>
                
                {/* <Hashrate store={appState} /> <br /> <br /> */}
                
                <Provider appState={appState}>
                    <Switch>
                        <Route exact path='/' component={Hashrate}/>
                        <Route path='/earnings/:id' component={Earnings}/>
                    </Switch>
                </Provider>

                {/* <Switch> */}
                    {/* <Route exact path='/' component={Hashrate}/> */}
                    {/* <Route path='/earnings/:id' component={Earnings}/> */}
                    {/* <Route path='/login' component={Login} /> */}
                    {/* <Route path='/schedule' component={Schedule}/> */}
                {/* </Switch> */}
    
            </div>
        );
    
    //   }
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );

export default Main
