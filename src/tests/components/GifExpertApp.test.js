import { shallow } from "enzyme"
import {GifExpertApp} from '../../GifExpertApp'
import React from 'react';
import '@testing-library/jest-dom'

describe('Test in component', () => {
    test('should show correctly', () => {
        
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('should show correctly an list category', () => {
        
        const category = ['One Punch', 'Goku']
        const wrapper = shallow(<GifExpertApp defaultCategories={category}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(category.length)
    })

    
    
})
