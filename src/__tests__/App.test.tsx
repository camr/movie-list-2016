import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, waitForElement } from "@testing-library/react";
import fetchMock from "fetch-mock";

import { config, movies } from "../util/test-data";

import App from "../App";

describe("<App />", () => {
    test("app fetches configuration and movie list", async () => {
        fetchMock.get(/.*configuration.*/, config);
        fetchMock.get(/.*discover\/movie.*/, movies);

        const { getByTestId } = render(<App />, { wrapper: MemoryRouter });

        await waitForElement(() => getByTestId("movie-list"));
        expect(getByTestId("movie-list-ul").children.length).toBe(movies.results.length);
    });
});
