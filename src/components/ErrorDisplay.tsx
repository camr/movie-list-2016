import React from "react";
import styled from "styled-components";

const StyledErrorDisplay = styled.div`
    color: #9b2c2c;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 3em;
    text-align: center;
`;

export const ErrorDisplay: React.FunctionComponent<{ error: string | null }> = props => {
    if (props.error) {
        return <StyledErrorDisplay>{props.error}</StyledErrorDisplay>;
    } else {
        return null;
    }
};
