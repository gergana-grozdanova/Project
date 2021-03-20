import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import AddPostForm from './components/Forms/Post';
import Posts from "./components/Posts/Posts";


const App = ()=>{
    return (
        <>
          <Header/>
          <Switch>
            <Route path="/" exact>
              <Posts/>
            </Route>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/register" exact>
              <Register/>
            </Route>
            <Route path="/post/add" exact>
              <AddPostForm/>
            </Route>
            <Route render={() => <h1 >Error Page</h1>} />
          </Switch>
          <Footer/>
        </>
    );
}

export default App;