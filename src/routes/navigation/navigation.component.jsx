import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

/*
Can use fragments instead of divs
a component that renders to nothing 
when its mounted to the DOM.

Useful to get around rule that component
needs only one top level parent.

Fragments are useful if you don't want to render
an HTML element.

Gets rid of wrapping div.

Short hand - <></>

React Router
Link 
- like an anchor tag, but uses the right browser
that you are using.

Importing SVGs
- SVGs can be imported at React Components
- SVGs are scalable vector graphics, 
HTML that no matter the size, renders crisp images
*/
