describe('PRUEBA', () => {
    const suma = (a, b) => {
        return a + b
    };
    it('suma de 2 numeros (4 y 5) resultado 9', () => {
        expect(suma(4,5)).toEqual(9)
    });
    it('suma de 2 numeros (4 y 5) resultado > 8', () => {
        expect(suma(4,5)).toBeGreaterThan(7)
    })
})