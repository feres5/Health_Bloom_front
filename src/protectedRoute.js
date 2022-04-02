import React from "react";
import {Route,Redirect} from "react-router-dom";

function ProtectedRoute({component: Component, ...restOfProps}){
    const isAuthenticated = localStorage.getItem("user_info");
    console.log("this", isAuthenticated);
    return(
      <Route
          {...restOfProps}
          render={(props) =>
              isAuthenticated? <Component {...props} />   : <Redirect to="/" />
          }
      />
    );

}
export default ProtectedRoute;
