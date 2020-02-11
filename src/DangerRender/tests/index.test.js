import React from 'react';
import { shallow, mount } from 'enzyme';

import DangerRender from '../index.js';

describe('<DangerRender/>', ()=> {

  it('should have no childs', ()=>{
    const wrapper = shallow(<DangerRender><div/><div/></DangerRender>);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').children()).toHaveLength(0);
  })

  it('should set danger attr', ()=>{
    const text = 'DangerTEXT';
    const wrapper = shallow(<DangerRender>{text}</DangerRender>);
    const props = wrapper.props();
    const dangerAttr = props.dangerouslySetInnerHTML;
    expect(dangerAttr).toBeDefined();
    const html = dangerAttr['__html'];
    expect(html).toEqual(text);
  })

  it('should pass attrs', ()=>{
    const wrapper = shallow(<DangerRender attr1='ATTR1'/>);
    const props = wrapper.props();
    const attr1 = props.attr1;
    expect(attr1).toBeDefined();
  })


});
