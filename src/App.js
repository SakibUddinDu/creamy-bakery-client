
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AddProduct from "./Components/AddProduct/AddProduct";
import AddReview from "./Components/AddReview/AddReview";
import AllOrders from "./Components/AllOrders/AllOrders";
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Home/Shared/Login/Login";
import PrivateRoute from './Components/Home/Shared/Login/PrivateRoute/PrivateRoute';
import NotFound from "./Components/Home/Shared/NotFound/NotFound";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import Orders from "./Components/Orders/Orders/Orders";


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
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
           
            <Route path="/orderList">
              <Orders></Orders>
            </Route>
            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin/>
            </Route>
            <Route path="/allOrders">
             <AllOrders/>
            </Route>
            <Route path="/manageProduct">
             <ManageProduct/>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
       </UserContext.Provider> 
  );
}

export default App;

