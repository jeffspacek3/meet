
import { render } from "@testing-library/react";
import App from "../App";

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

test("renders list of events", () => {
  const AppDom = render(<App />).container.firstChild;
  return expect(AppDom.querySelector("#event-list")).toBeInTheDocument();
})