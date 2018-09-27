import React from "react";
import Enzyme, { shallow, configure } from "enzyme";
import App from "../App";
import Adapter from "enzyme-adapter-react-16";
import { Text } from "react-native";
import Button from "../src/Button";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("it should render 1 Button component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find( Button)).toHaveLength(1);
  });
  it('<MyComponent />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Text)).toHaveLength(2);
  });
});
