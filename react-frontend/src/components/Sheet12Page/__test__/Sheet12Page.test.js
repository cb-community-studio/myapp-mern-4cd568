import React from "react";
import { render, screen } from "@testing-library/react";

import Sheet12Page from "../Sheet12Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders sheet12 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Sheet12Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("sheet12-datatable")).toBeInTheDocument();
    expect(screen.getByRole("sheet12-add-button")).toBeInTheDocument();
});
