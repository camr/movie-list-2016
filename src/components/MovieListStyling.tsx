import styled from "styled-components";

export const StyledErrorDisplay = styled.div`
    color: #9b2c2c;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 3em;
    text-align: center;
`;

export const StyledMovieListPage = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const StyledMovieListTitle = styled.div`
    color: #444;
    background-color: #fefefe;
    border-bottom: 1px solid #222;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 0.5px;
    line-height: 2em;

    text-align: center;
    text-transform: uppercase;

    position: fixed;
    width: 100%;
    z-index: 1000;
`;

export const StyledMovieList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    margin-top: 2.5em;
`;
