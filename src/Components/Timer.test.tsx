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
    it('should be render DIV', () => {
        expect(wrapper.find('div').length).toBeGreaterThan(2)
    })

})

// npm run test
