import React from "react";
import { Switch, Route, Redirect,} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import AddPostForm from './components/Forms/Post';
import Posts from "./components/Posts/Posts";
import MyProfile from "./components/MyProfile/MyProfile";

import {deleteToken} from './services/token.js'
import AppContextProvider,{AppContext} from './context'
import Logout from "./components/Logout";
//import {getToken} from './services/token'



const App = ()=>{
  
    return (
      <AppContextProvider>
         <Header/>
          <Switch>
            <Route path="/" exact component={Posts}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/post/add" exact component={AddPostForm}/>
            <Route path="/myProfile" exact component={MyProfile}/>
            <Route path="/logout" exact component={Logout} />
            <Route render={() => <h1 >Error Page</h1>} />
          </Switch>
          <Footer/>
        </AppContextProvider>
    );
}

export default App;