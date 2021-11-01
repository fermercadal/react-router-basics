import { Route, NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>

      <NavLink to="/welcome/new-user">Say hello</NavLink>

      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
