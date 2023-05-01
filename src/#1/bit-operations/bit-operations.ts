import { BitOperations } from "#1/bit-operations/interface";

function bitOperations(Uint8Array: Uint8Array): BitOperations {
    return {
        get: (indexArray: number, indexByte: number): number => {
            return Number((Uint8Array[indexArray] & 1 << indexByte) !== 0);
        },
        set: (indexArray: number, indexByte: number, bit: number): void => {
            if (bit) {
                Uint8Array[indexArray] = Uint8Array[indexArray] | (1 << indexByte)
            } else {
                Uint8Array[indexArray] = Uint8Array[indexArray] & ~(1 << indexByte)
            }
        }
    }
}

export default bitOperations;