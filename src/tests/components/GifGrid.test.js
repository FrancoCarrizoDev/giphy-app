import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import '@testing-library/jest-dom'
import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")
describe('Test in GifGrid Component', () => {

    test('should show the component in snapshot', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={'Pacman'}/>)
        expect(wrapper).toMatchSnapshot()
    })

    test('should show items with loading images useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://google.com/image',
            title: 'ZXC'
        },
        {
            id: '1234',
            url: 'https://google.com/image',
            title: 'ZXC'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={'Pacman'}/>)
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
    })
    
})
