import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import classnames from "classnames";

import { Config } from "../config";
import { Movie } from "../movie";
import { formatReleaseDate } from "../util";

import { ErrorDisplay } from "../components/ErrorDisplay";
import { StyledPage, StyledTitle } from "../components/Layout";
import { Loader } from "../components/Loader";
import { StyledPopularityScore } from "../components/MoviePreviewStyling";

import {
    StyledMovieDetails,
    StyledMoviePoster,
    StyledMovieInfo,
    StyledMovieStats,
    StyledFavorite,
    StyledOverview,
    StyledCloseButton,
} from "./MovieDetailsStyling";

interface MovieDetailsProps extends RouteComponentProps<{ movieId: string }> {
    config: Config | null;
    error: string | null;
    movies: Movie[];
    onFavoriteChange: (id: number) => void;
}

const MovieDetails: React.FunctionComponent<MovieDetailsProps> = ({
    config,
    error,
    match: {
        params: { movieId },
    },
    movies,
    onFavoriteChange,
}: MovieDetailsProps) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [err, setError] = useState<string | null>(null);

    // Returns a full poster image URL for a partial path and config object.
    const posterURL = (thumb: string): string => {
        return config ? `${config.images.base_url}${config.images.poster_sizes[2]}/${thumb}` : "";
    };

    useEffect(() => {
        setError(error);

        const candidate = movies.find(m => m.id.toString() === movieId);
        if (!candidate) {
            setError("Could not find a movie with that ID");
        } else {
            setError(null);
            setMovie(candidate);
        }
    }, [error, config, movieId, movies]);

    return (
        <StyledPage>
            <StyledTitle>
                <div className="content">
                    <div className="text">{err || (movie && movie.title)}</div>
                    <StyledCloseButton to={"/"}>close</StyledCloseButton>
                </div>
            </StyledTitle>

            <ErrorDisplay error={err}></ErrorDisplay>

            {(!config || !movies.length || !movie) && !err && <Loader />}

            {!err && config && movie && (
                <StyledMovieDetails>
                    <StyledMovieInfo>
                        <StyledMoviePoster src={posterURL(movie.poster_path)} />
                        <StyledMovieStats>
                            <div className="actions">
                                <StyledPopularityScore title={movie.popularity.toString()}>
                                    <span>{Math.round(movie.popularity)}</span>
                                </StyledPopularityScore>
                                <StyledFavorite
                                    className={classnames({ favorite: true, active: movie.favorited })}
                                    viewBox="0 0 98 92"
                                    onClick={(): void => onFavoriteChange(movie.id)}
                                >
                                    <path
                                        strokeWidth="5"
                                        d="M49 73.5L22.55 87.406l5.05-29.453-21.398-20.86 29.573-4.296L49
                                6l13.225 26.797 29.573 4.297-21.4 20.86 5.052 29.452z"
                                        fillRule="evenodd"
                                    />
                                </StyledFavorite>
                            </div>
                            <div className="release-date">{formatReleaseDate(movie.release_date)}</div>
                        </StyledMovieStats>
                    </StyledMovieInfo>
                    <StyledOverview>{movie.overview}</StyledOverview>
                </StyledMovieDetails>
            )}
        </StyledPage>
    );
};

export default MovieDetails;
