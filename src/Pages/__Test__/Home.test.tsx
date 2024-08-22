import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../Home";

describe("Home", () => {
  it("should render Home", () => {
    const component = render(<Home />);
    expect(component).toBeTruthy();
  });
});
