import React from "react";

import { Config } from "../types/config";
import { Movie } from "../types/movie";
import { formatReleaseDate } from "../util";

import {
    StyledMoviePreview,
    StyledMovieThumbnail,
    StyledReleaseAndDetails,
    StyledDetailedButton,
    StyledPopularityScore,
} from "./MoviePreviewStyling";

interface MoviePreviewProps {
    config: Config;
    movie: Movie;
}
export const MoviePreview: React.FunctionComponent<MoviePreviewProps> = ({ config, movie }: MoviePreviewProps) => {
    // Returns a full thumbnail image URL for a partial path and config object.
    const thumbnailURL = (thumb: string): string => {
        return config ? `${config.images.base_url}${config.images.poster_sizes[0]}/${thumb}` : "";
    };

    return (
        <StyledMoviePreview>
            <div className="title">{movie.title}</div>

            <div className="info">
                <StyledMovieThumbnail src={thumbnailURL(movie.poster_path)} />

                <StyledReleaseAndDetails>
                    <div className="release-date">{formatReleaseDate(movie.release_date)}</div>
                    <StyledDetailedButton to={`/${movie.id}`}>Details</StyledDetailedButton>
                </StyledReleaseAndDetails>

                <StyledPopularityScore title={movie.popularity.toString()}>
                    <span>{Math.round(movie.popularity)}</span>
                </StyledPopularityScore>
            </div>
        </StyledMoviePreview>
    );
};
