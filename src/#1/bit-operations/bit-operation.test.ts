import bitOperations from "../bit-operations/bit-operations";

describe("bit-operations", () => {
    test("get bit value", () => {
        const bitOperation = bitOperations(new Uint8Array([0b1110, 0b1101]));

        expect(bitOperation.get(0 ,1)).toBe(1)
        expect(bitOperation.get(1 ,1)).toBe(0)
    })

    test("set bit value to 1", () => {
        const bitOperation = bitOperations(new Uint8Array([0b1110, 0b1101]));

        // 0 => 1
        expect(bitOperation.get(0 ,0)).toBe(0)
        bitOperation.set(0 ,0, 1)
        expect(bitOperation.get(0 ,0)).toBe(1)

        // 1 => 1
        expect(bitOperation.get(1 ,2)).toBe(1)
        bitOperation.set(1 ,2, 1)
        expect(bitOperation.get(1 ,2)).toBe(1)
    })

    test("set bit value to 0", () => {
        const bitOperation = bitOperations(new Uint8Array([0b1110, 0b1101]));

        // 1 => 0
        expect(bitOperation.get(0 ,1)).toBe(1)
        bitOperation.set(0 ,1, 0)
        expect(bitOperation.get(0 ,1)).toBe(0)

        // 0 => 0
        expect(bitOperation.get(1 ,1)).toBe(0)
        bitOperation.set(1 ,1, 0)
        expect(bitOperation.get(1 ,1)).toBe(0)
    })
});