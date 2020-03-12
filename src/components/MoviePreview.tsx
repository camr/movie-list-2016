import React from "react";

import { Config } from "../config";
import { Movie } from "../movie";

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

    // Converts the release date to a localized string.
    // Assumes date format "YYYY-MM-DD" otherwise returns the original string.
    const releaseDate = (dateString: string): string => {
        const dateRegex = /(\d+)\-(\d+)\-(\d+)/;
        try {
            const matches = dateString.match(dateRegex);
            if (!matches || matches.length < 4) {
                return dateString;
            }

            const year = parseInt(matches[1], 10);
            const month = parseInt(matches[2], 10) - 1;
            const day = parseInt(matches[3], 10);

            const d = new Date(Date.UTC(year, month, day));
            return d.toLocaleString("en-US", {
                timeZone: "UTC",
                month: "long",
                day: "2-digit",
                year: "numeric",
            });
        } catch (err) {
            return dateString;
        }

        return dateString;
    };

    return (
        <StyledMoviePreview>
            <div className="title">{movie.title}</div>

            <div className="info">
                <StyledMovieThumbnail src={thumbnailURL(movie.poster_path)} />

                <StyledReleaseAndDetails>
                    <div className="release-date">{releaseDate(movie.release_date)}</div>
                    <StyledDetailedButton>Details</StyledDetailedButton>
                </StyledReleaseAndDetails>

                <StyledPopularityScore title={movie.popularity.toString()}>
                    <span>{Math.round(movie.popularity)}</span>
                </StyledPopularityScore>
            </div>
        </StyledMoviePreview>
    );
};
