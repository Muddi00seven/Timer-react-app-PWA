import React from 'react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TimerClock from './TimerClock'

Enzyme.configure({adapter: new Adapter})
let wrapper = shallow(<TimerClock/>)

describe('TimerClock', () => {
    it('it should be render Timer Clock' , () => {
        shallow(<TimerClock/>)
    });
    it('should render DIV', () => {
        expect(wrapper.find('div').length).toBeGreaterThan(2)
    });
    it('should render buttons', () => {
        expect(wrapper.find('button').length).toBeLessThanOrEqual(6)
    });
    it('should click button' , () => {
        expect(wrapper.find('button').simulate('click'))
    });
})


// npm run test
