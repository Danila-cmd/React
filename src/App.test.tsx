import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from './App';
import SamuraiJSApp from "./App";

it('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SamuraiJSApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
