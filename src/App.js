import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import AdAdmin from "./Component/TopNews/AddAdmin/AdAdmin";
import InternationalNews from "./Component/TopNews/InternationalNews/InternationalNews";
import NationalNews from "./Component/TopNews/NationalNews/NationalNews";
import PostNews from "./Component/TopNews/PostNews/PostNews";
import SportsNews from "./Component/TopNews/SportsNews/SportsNews";
import TopNews from "./Component/TopNews/TopNews/TopNews";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/topNews">
            <TopNews></TopNews>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/nationalNews">
            <NationalNews></NationalNews>
          </PrivateRoute>
          <PrivateRoute path="/internationalNews">
            <InternationalNews></InternationalNews>
          </PrivateRoute>
          <PrivateRoute path="/sportNews">
            <SportsNews></SportsNews>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/postNews">
            <PostNews></PostNews>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AdAdmin></AdAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
