import { render } from "@testing-library/react";
import EventList from "../components/EventList";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  });

  test('has an element with "list" role', () => {
    const view = render(<EventList />);
    expect(EventListComponent.getByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    EventListComponent.rerender = (
      <EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
    );
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });
});

export default EventList;
