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
        const onClick = jest.fn();
        const component = mount(<DeleteButton onClick={onClick}/>);
        console.log(component.debug());
        component.find('button').first().simulate('click', onClick);
        expect(onClick).toHaveBeenCalled();
    });
});