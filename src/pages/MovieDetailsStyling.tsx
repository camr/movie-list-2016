import styled from "styled-components";
import { Link } from "react-router-dom";

// Movie Details Layout
export const StyledMovieDetails = styled.div`
    margin: 2.5em auto 0 auto;
    padding: 0.5em;

    width: 100%;
    max-width: 900px;
`;

// Info Row: Poster, Score, Favorite and Release Date
export const StyledMovieInfo = styled.div`
    display: flex;
`;

// Movie Poster
export const StyledMoviePoster = styled.img``;

// Stats: Score, Favorite and Release Date
export const StyledMovieStats = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 10px;
    width: 100%;

    .actions {
        display: flex;
        width: 100%;

        align-items: center;

        padding-bottom: 20px;
    }

    .release-date {
        font-size: 1em;
        font-weight: bold;
    }
`;

export const StyledFavorite = styled.svg`
    cursor: pointer;

    fill: white;
    stroke: cadetblue;

    height: 60px;
    width: 60px;

    margin-left: 20px;

    transition: all 0.25s;

    &:hover {
        fill: darkslategrey;
        stroke: darkslategrey;
    }

    &.active {
        fill: cadetblue;
    }
`;

export const StyledOverview = styled.p`
    line-height: 1.5em;
`;

// "Close" button
export const StyledCloseButton = styled(Link)`
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
