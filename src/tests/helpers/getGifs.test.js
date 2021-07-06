import { getGifs } from "../../helpers/getGifs"

describe('Test in request getGifs', () => {

    test('should return 10 elements', async() => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(10)
    })

    test('should return 10 elements', async() => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
})
