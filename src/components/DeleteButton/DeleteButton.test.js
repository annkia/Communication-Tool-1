import React from 'react';
import ReactDOM from "react-dom";
import DeleteButton from './DeleteButton';
import App from "../App/App.test";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tests for DeleteButton component.', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DeleteButton />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('component include awesome icon "trash" inside', () => {
        const component = shallow(<DeleteButton />);
        expect(component.containsMatchingElement(<FontAwesomeIcon icon={"trash"}/>)).toEqual(true);
    });
    it('component has class .deleteButton', () => {
       const component = shallow(<DeleteButton />);
       component.hasClass('deleteButton');
    });
    it('handle method for onClick good work', () => {
        const OnClick = jest.fn();
        const component = mount(<DeleteButton handleOnClick={OnClick}/>);
        component.simulate('click');
        expect(OnClick).toHaveBeenCalled();
    });
});