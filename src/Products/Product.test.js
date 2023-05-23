import React from "react";
import renderer from 'react-test-renderer';

import Products from './Product'

test("render when there are no item", () =>{ 
    const tree =renderer.create(<Products></Products>).toJSON();
    expect(tree).toMatchSnapshot();
    }
)
test("render when there are one item", () => {
    const tree =renderer.create(<Products items={["anything"]}></Products>).toJSON();
    expect(tree).toMatchSnapshot();

    }
)
test("render when there are Many item", () => {
    const tree =renderer.create(<Products items={["anything","asdfasd","just print stuff"]}></Products>).toJSON();
    expect(tree).toMatchSnapshot();

    }
)




