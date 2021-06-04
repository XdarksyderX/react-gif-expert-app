import { getGifs }  from  '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {

    test('Should return 10 items', async () => {
        const gifs = await getGifs('one punch man', 10);
        expect(gifs.length).toBe(10);
    });

    test('No category: Should return []', async () => {
        const gifs = await getGifs('');
        expect(gifs).toStrictEqual([]);
    });
    
})