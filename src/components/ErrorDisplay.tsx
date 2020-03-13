import React from "react";
import styled from "styled-components";

const StyledErrorDisplay = styled.div`
    color: #9b2c2c;
    font-size: 1.2em;
    font-weight: bold;
    line-height: 3em;
    text-align: center;
`;

// Displays a styled error message if one is passed as a prop.
// Renders nothing if `error` prop is null.
export const ErrorDisplay: React.FunctionComponent<{ error: string | null }> = props => {
    if (props.error) {
        return <StyledErrorDisplay data-testid="error">{props.error}</StyledErrorDisplay>;
    } else {
        return null;
    }
};
