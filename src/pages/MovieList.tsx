import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Config } from "../config";
import { Movie } from "../movie";

import { ErrorDisplay } from "../components/ErrorDisplay";
import { StyledPage, StyledTitle } from "../components/Layout";
import { Loader } from "../components/Loader";
import { MoviePreview } from "../components/MoviePreview";

import { StyledMovieList } from "./MovieListStyling";

interface MovieListProps extends RouteComponentProps<{}> {
    config: Config | null;
    error: string | null;
    movies: Movie[];
}

const MovieList: React.FunctionComponent<MovieListProps> = ({ config, error, movies }: MovieListProps) => {
    return (
        <StyledPage>
            <StyledTitle>
                <div className="content">
                    <div className="text">Movies</div>
                </div>
            </StyledTitle>
            <ErrorDisplay error={error} />

            {(!config || !movies.length) && !error && <Loader />}
            {config && movies.length && !error && (
                <StyledMovieList>
                    {movies.map(movie => (
                        <MoviePreview key={movie.id} config={config} movie={movie} />
                    ))}
                </StyledMovieList>
            )}
        </StyledPage>
    );
};

export default MovieList;
