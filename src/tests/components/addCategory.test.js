import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe('Test in component', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('should be show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should change box text', () => {
        const input = wrapper.find('input')
        const value = "Hello word"
        input.simulate('change', { target: { value } })
    })

    test('shouldt post the información onsubmit', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call the setCategories and clean the boxtext', () => {
        
        // Simular El inputChange
        const value = "Hello word"
        // Simular el submit
        wrapper.find('input').simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault() { } })
        // setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled()
        // el input debe estar vacio
        expect(wrapper.find('input').prop('value')).toBe('')
    })


})
