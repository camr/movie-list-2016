import React, { useState, useEffect } from "react";

import { Config } from "../config";
import { Movie } from "../movie";

import { StyledErrorDisplay, StyledMovieList, StyledMovieListPage, StyledMovieListTitle } from "./MovieListStyling";

import { MoviePreview } from "./MoviePreview";
import { Loader } from "./Loader";

const ErrorDisplay: React.FunctionComponent<{ error: string | null }> = props => {
    if (props.error) {
        return <StyledErrorDisplay>{props.error}</StyledErrorDisplay>;
    } else {
        return null;
    }
};

const MovieList: React.FunctionComponent<{}> = () => {
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
            setMovies(movies.results);
        } catch (err) {
            console.error(err);
            setError("Could not load movie list");
        }
    };

    useEffect(() => {
        getConfiguration();
        getMovies();
    }, []);

    return (
        <StyledMovieListPage>
            <StyledMovieListTitle>Movies</StyledMovieListTitle>
            <ErrorDisplay error={error} />

            {(!config || !movies.length) && !error && <Loader />}
            {config && movies.length && !error && (
                <StyledMovieList>
                    {movies.map(movie => (
                        <MoviePreview key={movie.id} config={config} movie={movie} />
                    ))}
                </StyledMovieList>
            )}
        </StyledMovieListPage>
    );
};

export default MovieList;
