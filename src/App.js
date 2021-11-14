import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductViewModal from "./components/ProductViewModal";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
						<ProductViewModal/>
          </div>
        )}
      ></Route>
    </Router>
  );
};

export default App;
