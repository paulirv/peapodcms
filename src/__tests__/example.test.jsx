import { render, screen } from "@testing-library/preact";
import MarkdownRenderer from "../utils/markdownParser";

test("renders Markdown content correctly", () => {
  const content = {
    data: { title: "Test Title", description: "Test Description" },
    body: "# Hello World\nThis is **bold**.",
  };

  render(<MarkdownRenderer content={content} />);

  // Check for title and description
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();

  // Check for rendered Markdown
  expect(screen.getByText("Hello World")).toBeInTheDocument();
  expect(screen.getByText("bold")).toBeInTheDocument();
});