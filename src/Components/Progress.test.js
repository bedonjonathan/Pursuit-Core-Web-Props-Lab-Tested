import { render, screen } from "@testing-library/react";
import Progress from "./Progress";

describe("Progress", () => {
  it("renders goal out of total", () => {
    render(<Progress goal={1000} total={441} />);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toEqual(`Raised $441 of $1000`);
  });
});
