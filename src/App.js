import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';

import { auth, createUserProfileDocument, onSnapshot } from './firebase/firebase.utils';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapShot = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        alert(`Welcome to Bad Fasion, ${userAuth.displayName}`);

        const userRef = await createUserProfileDocument(userAuth);

        this.unsubscribeFromSnapShot = onSnapshot(userRef, (doc) => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data()
            }
          });
        })
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapShot();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/auth' element={<AuthPage/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
