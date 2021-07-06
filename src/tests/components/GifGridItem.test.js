import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'
import React from 'react';

describe('Tets in <GifGridItem/>', () => {


    const title = 'Un título'
    const url = 'https://google.com'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)


    test('should the component correctly', () => {
        
        expect(wrapper).toMatchSnapshot()
    })


    test('should have an parragrapth with', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    
    test('should have the img equal url and alt to theys props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('should have a animate_Css', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    })
    

})
