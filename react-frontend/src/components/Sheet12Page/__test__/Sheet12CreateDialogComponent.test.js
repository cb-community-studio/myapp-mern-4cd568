import React from "react";
import { render, screen } from "@testing-library/react";

import Sheet12CreateDialogComponent from "../Sheet12CreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders sheet12 create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Sheet12CreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("sheet12-create-dialog-component")).toBeInTheDocument();
});
