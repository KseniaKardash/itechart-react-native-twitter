import React from "react";
import { shallow, mount, configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import Button from "../src/Button";

configure({ adapter: new Adapter() });

describe("Button snapShot enzyme", () => {
  it("renders BG color as expected", () => {
    const wrapper = shallow(<Button />);
    const color = "#ff5d39";
    expect(wrapper.prop("style").backgroundColor).toEqual(color);
  });

  it("renders props as expected", () => {
    const wrapper = shallow(<Button />);
    wrapper.setProps({ text: "hi" });
    expect(wrapper.prop("children").props.children).toEqual("hi");
  });

  it("renders as expected", () => {
    const wrapper = shallow(<Button text={"t"} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ text: "t" });
    expect(wrapper).toMatchSnapshot();
  });
});
