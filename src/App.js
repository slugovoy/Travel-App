import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SavedList from "./pages/SavedList";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="mainAppDiv">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/savedlist" component={SavedList} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
