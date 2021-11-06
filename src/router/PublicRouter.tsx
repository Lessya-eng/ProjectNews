import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
    component: Component,
    restricted,
    ...rest
}: any) => {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
};