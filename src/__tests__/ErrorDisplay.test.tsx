import React from "react";
import { render } from "@testing-library/react";

import { ErrorDisplay } from "../components/ErrorDisplay";

describe("<ErrorDisplay />", () => {
    test("should only display when error prop is non-null", async () => {
        const { queryByTestId } = render(<ErrorDisplay error={null} />);
        expect(queryByTestId("error")).toBeNull();
    });

    test("renders an error string", async () => {
        const { getByTestId } = render(<ErrorDisplay error={"error text"} />);
        expect(getByTestId("error").textContent).toBe("error text");
    });
});
