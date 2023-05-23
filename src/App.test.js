import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer"
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("render snapshot when there are no parameter",() => {
  const tree =renderer.create(<App></App>).toJSON();
    expect(tree).toMatchSnapshot();
});
