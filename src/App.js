import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Error from "./pages/error/404";
import Home from "./pages/home/Home";
import Sell from "./pages/list/Sell";
import Properties from "./pages/property/Properties";

// import { Error, Home, Plan, Auth } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="properties" element={<Properties />} />
            <Route path="sell" element={<Sell />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />

            <Route path="account">
              <Route index element={"<List />"} />
              <Route path=":userId" element={"<Single />"} />
            </Route>
          </Route>
          <Route path="properties/sell" element={<Sell />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
