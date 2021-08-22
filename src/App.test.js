import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import Contexts from "./contexts/Contexts";

describe("app", () => {
  it("should render without crashing", () => {
    const appComponent = renderer.create(
      <Contexts>
        <App />
      </Contexts>
    );
    let componentTree = appComponent.toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
