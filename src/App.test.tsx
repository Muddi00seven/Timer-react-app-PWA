import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import TimerClock from './Components/TimerClock';

Enzyme.configure({adapter: new Adapter()})

let wrapper = shallow(<App/>)

describe('App', ()=> {
    it('should be render a <div />' , ()=> {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should be render <TImerClock/>' , () => {
        expect(wrapper.containsMatchingElement(<TimerClock/>)).toEqual(true)
    })
})

// npm run test