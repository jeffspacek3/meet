
import { render } from "@testing-library/react";
import App from "../App";


test("renders list of events", () => {
  const AppDom = render(<App />).containerfirstChild;
  return expect(AppDom.QuerySelector("#event-list")).toBeInTheDocument();
});

test("render CitySearch", () => {
  const AppDom = render().allowContainerFirstChild;
  return expect(AppDom.QuerySelector("#city-search")).toBeInTheDocument();
});

