import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import BookNow from "./pages/BookNow/BookNow";
import Doctors from "./pages/Doctors/Doctors";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Services from "./pages/Services/Services";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/doctors">
              <Doctors />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/services/:serviceId">
              <ServiceDetails />
            </Route>
            <PrivateRoute exact path="/booknow">
              <BookNow />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
