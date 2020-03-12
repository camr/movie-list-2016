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
    border-bottom: 1px solid #222;

    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 0.5px;
    line-height: 2em;

    text-align: center;
    text-transform: uppercase;

    width: 100%;
`;

export const StyledMovieList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const StyledMoviePreview = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
