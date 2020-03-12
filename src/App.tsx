import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

interface AppProps {}

const PageLayout = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <PageLayout className="main">
                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route exact path="/movie/:id" component={MovieDetails} />
                </Switch>
            </PageLayout>
        </BrowserRouter>
    );
};

export default App;
