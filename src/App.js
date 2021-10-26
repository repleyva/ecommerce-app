import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Route
        render={(props) => (
          <div>
            <div className="container">
              <Header {...props} />
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
          </div>
        )}
      ></Route>
    </Router>
  );
};

export default App;
