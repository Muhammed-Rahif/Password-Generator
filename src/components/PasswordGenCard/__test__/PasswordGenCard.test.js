import React from "react";
import renderer from "react-test-renderer";
import Contexts from "../../../contexts/Contexts";
import PasswordGenCard from "../PasswordGenCard";

describe("password generating card", () => {
  const passwordGenCardComponent = renderer.create(
    <Contexts>
      <PasswordGenCard />
    </Contexts>
  );
  let componentTree = passwordGenCardComponent.toJSON();

  it("should render without crashing", () => {
    expect(componentTree).toMatchSnapshot();
  });
});
