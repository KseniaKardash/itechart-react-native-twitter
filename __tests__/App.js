import React from "react";
import renderer from "react-test-renderer";
import { shallow, configure } from 'enzyme';
import App from "../App";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("App snapShot", () => {
  it("renders as expected", () => {
    const snap = shallow(<App/>);
    expect(snap).toMatchSnapshot();
  });
});
