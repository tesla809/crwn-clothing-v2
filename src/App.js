import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;

/*
React Router
Routes 
- Allows app to register route level components
- This lets us render a component based on a specific Route

Route
- Give path key and a string variable
- String is route path
- / is relative path home
- element key takes component we want to render

Nested routes
- embed children in Route
- Make nested path is child relative to parent


Outlet (in home.componenet.jsx)
- An outlet where code we want to render 
should come out form
- Where ever you render outlet
is where you render the subroutes

Aware!
List Subroutes with name only
path='shop'

Not 
path='/shop'
This will cause an error and not render ANY of the page

index keyword 
- An attribute 
- index or index={true}
- tell route that if we you match path='/',
the subroute with index attribute is base component
and shown.

Top level component
- at root and ever present
- a template basically
- Outlet represents what we swap in or out.
*/
