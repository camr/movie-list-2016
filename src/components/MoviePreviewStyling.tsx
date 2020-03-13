import styled from "styled-components";
import { Link } from "react-router-dom";

// Movie Preview:
// - Movie title along top row
// - Grid of three info columns underneath
export const StyledMoviePreview = styled.li`
    padding: 0.5em 0;

    .title {
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1em;
        padding: 0.5em;
    }

    .info {
        display: grid;
        grid-template-columns: 110px auto 110px;
    }

    & + & {
        border-top: 1px solid #222;
    }

    &:nth-child(even) {
        background-color: #f7fafc;
    }
`;

// Movie Poster Thumbnail
export const StyledMovieThumbnail = styled.img`
    padding-left: 10px;

    height: 138px;
    width: 102px;
`;

// Movie Release Date
export const StyledReleaseAndDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding-left: 20px;

    .release-date {
        font-size: 1em;
        text-align: center;

        padding-bottom: 20px;
    }
`;

// Movie "Details" Button
export const StyledDetailedButton = styled(Link)`
    outline: none;

    background: cadetblue;
    border: 0;
    border-radius: 5px;
    box-shadow: -3px 3px 3px rgba(100, 100, 100, 0.5);
    color: #fff;

    cursor: pointer;

    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.5px;
    padding: 0.5em 1em;
    text-decoration: none;
    text-transform: uppercase;

    transition: box-shadow 0.25s;

    &:hover {
        box-shadow: -1px 1px 1px rgba(100, 100, 100, 0.5);
    }
`;

// Movie Popularity Score: Colored circle with white text
export const StyledPopularityScore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        height: 4em;
        width: 4em;

        background-color: coral;
        border: 0;
        border-radius: 4em;
        color: #fff;

        font-size: 1em;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
