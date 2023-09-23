import React from "react";
import { render, screen } from "@testing-library/react";

import Sheet12EditDialogComponent from "../Sheet12EditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders sheet12 edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Sheet12EditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("sheet12-edit-dialog-component")).toBeInTheDocument();
});
