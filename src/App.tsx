import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MovieList} />
                <Route exact path="/movie/:id" component={MovieDetails} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
