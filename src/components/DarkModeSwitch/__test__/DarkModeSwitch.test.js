import React from "react";
import renderer from "react-test-renderer";
import Contexts from "../../../contexts/Contexts";
import DarkModeSwitch from "../DarkModeSwitch";

describe("dark mode switch", () => {
  const darkModeSwitchComponent = renderer.create(
    <Contexts>
      <DarkModeSwitch />
    </Contexts>
  );
  let componentTree = darkModeSwitchComponent.toJSON();

  it("should dark mode switch render without crashing", () => {
    expect(componentTree).toMatchSnapshot();
  });

  test("should change light theme context to true when dark mode switch is disabled", () => {
    darkModeSwitchComponent.root
      .findByType("input")
      .props.onClick({ target: { checked: false } });
    let componentTreeWhenDarkMode = darkModeSwitchComponent.toJSON();
    expect(componentTreeWhenDarkMode).toMatchSnapshot();
  });
});
