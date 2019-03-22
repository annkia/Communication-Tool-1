import React from 'react';
import ReactDOM from "react-dom";
import DeleteButton from './DeleteButton';
import App from "../App/App.test";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tests for DeleteButton component.', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DeleteButton />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('component include awesome icon inside', () => {
        const component = shallow(<DeleteButton />);
        expect(component.containsMatchingElement(<FontAwesomeIcon/>)).toEqual(true);
    });
    it('component include methods in props for handle on click', () => {
       const component = shallow(<DeleteButton handleOnClick={() => true}/>);
       expect(component.prop('handleOnClick')).toEqual(true);
    });
});