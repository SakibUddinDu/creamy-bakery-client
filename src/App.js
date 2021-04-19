
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Home/Shared/Login/Login";
import PrivateRoute from "./Components/Home/Shared/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/MainDashbord/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout/:_id">
           
              <Dashboard></Dashboard>
            </PrivateRoute>
            {/* <Route path="/checkout/:_id">
             
              <Dashboard></Dashboard>
            </Route> */}
            {/* <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route> */}
            {/* <PrivateRoute>
            <Dashboard/>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> */}
            {/* <Route path="/dashboard">
              <Dashboard/>
            </Route> */}
            {/* <Route path="/doctor/patients">
             <AllPatients></AllPatients>
            </Route>
            <Route path="/addDoctor">
             <AddDoctor/>
            </Route> */}
{/* 
            <Route path="*">
              <NotFound></NotFound>
            </Route> */}

          </Switch>
        </Router>
       </UserContext.Provider> 
  );
}

export default App;

