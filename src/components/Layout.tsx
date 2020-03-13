import styled from "styled-components";

export const StyledPage = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const StyledTitle = styled.div`
    color: #444;
    background-color: #fefefe;
    border-bottom: 1px solid #222;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

    font-size: 1em;
    letter-spacing: 0.5px;
    line-height: 2em;

    position: fixed;
    width: 100%;
    z-index: 1000;

    .content {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

        overflow: hidden;
        white-space: nowrap;

        .text {
            font-size: 1.2em;
            font-weight: bold;
            text-align: left;
            text-transform: uppercase;

            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 10px;
        }

        a {
            font-size: 0.75em;
            line-height: 1em;
            height: 1em;

            margin-right: 10px;
        }
    }
`;
