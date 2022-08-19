import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import AdminDashBoard from "./pages/admindashboard/AdminDashBoard";
import CarCards from "./components/carCards/CarCards";
import UserDetail from "./pages/userdetail/UserDetail";
import BikeTable from "./components/addbikes/adminpanelBikeAndCarTable/BikeTable";
import BikeCards from "./components/bikeCards/BikeCards";
import CarTable from "./components/addcars/adminpanelcars/CarTable";
import Logout from "./pages/logout/Logout"

// import { createContext, useReducer } from "react";
// export  const UserContext =createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={{state,dispatch}}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admindashboard">
            <Route index element={<AdminDashBoard />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="carproduct">
              <Route index element={<List />} />
              <Route path=":carId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="bikeproduct">
              <Route index element={<List />} />
              <Route path=":carId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="carcards" element={<CarCards />} />
          <Route path="userdetail" element={<UserDetail />} />
          <Route path="biketable" element={<BikeTable />} />
          <Route path="bikecards" element={<BikeCards />} />
          <Route path="cartable" element={<CarTable />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
