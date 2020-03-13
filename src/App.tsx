import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";

import { Movie } from "./types/movie";
import { Config } from "./types/config";

const PageLayout = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const App: React.FunctionComponent<{}> = () => {
    const [error, setError] = useState<string | null>(null);
    const [config, setConfig] = useState<Config | null>(null);
    const [movies, setMovies] = useState<Movie[]>([]);

    const getConfiguration = async (): Promise<void> => {
        try {
            const url = "https://api.themoviedb.org/3/";
            const endpoint = "configuration";
            const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY || "";

            const params = new URLSearchParams({
                api_key: apiKey, // eslint-disable-line @typescript-eslint/camelcase
            });

            const res = await fetch(`${url}${endpoint}?${params.toString()}`);
            if (!res.ok) {
                throw new Error(`API request failed: ${res.statusText}`);
            }

            const config = await res.json();
            setConfig(config);
        } catch (err) {
            console.error(err);
            setError("Could not load movie list");
        }
    };

    const getMovies = async (): Promise<void> => {
        try {
            const url = "https://api.themoviedb.org/3/";
            const endpoint = "discover/movie";
            const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY || "";
            const page = "1";
            const year = "2016";
            const sortBy = "popularity.desc";

            const params = new URLSearchParams({
                api_key: apiKey, // eslint-disable-line @typescript-eslint/camelcase
                primary_release_year: year, // eslint-disable-line @typescript-eslint/camelcase
                sort_by: sortBy, // eslint-disable-line @typescript-eslint/camelcase
                page,
            });

            const res = await fetch(`${url}${endpoint}?${params.toString()}`);
            if (!res.ok) {
                throw new Error(`API request failed: ${res.statusText}`);
            }

            const movies = await res.json();
            setMovies(movies.results.sort((a: Movie, b: Movie) => b.popularity - a.popularity));
        } catch (err) {
            console.error(err);
            setError("Could not load movie list");
        }
    };

    // Toggle the stored favorite state of the given movie ID.
    const toggleFavoriteState = (id: number): void => {
        setMovies(movies.map(m => (m.id === id ? Object.assign({}, m, { favorited: !m.favorited }) : m)));
    };

    useEffect(() => {
        getConfiguration();
        getMovies();
    }, []);

    return (
        <BrowserRouter>
            <PageLayout className="main">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props): JSX.Element => (
                            <MovieList {...props} config={config} error={error} movies={movies} />
                        )}
                    />

                    <Route
                        exact
                        path="/:movieId"
                        render={(props): JSX.Element => (
                            <MovieDetails
                                {...props}
                                config={config}
                                error={error}
                                movies={movies}
                                onFavoriteChange={toggleFavoriteState}
                            />
                        )}
                    />
                </Switch>
            </PageLayout>
        </BrowserRouter>
    );
};

export default App;
