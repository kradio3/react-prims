import React from 'react';
import { shallow } from 'enzyme';

import Div from '../index.js';

describe('<Div/>', ()=> {
  it('should render childs', ()=>{
    const wrapper = shallow(<Div><div/><div/></Div>);
    expect(wrapper.find('div').children()).toHaveLength(2);
  })

  it('should render null', ()=>{
    const wrapper = shallow(<Div hidden><div/><div/></Div>);
    expect(wrapper.find('div')).toHaveLength(0);
  })

  it('should render custom component', ()=>{
    const wrapper = shallow(<Div component='span'></Div>);
    expect(wrapper.find('span')).toHaveLength(1);
  })
});
