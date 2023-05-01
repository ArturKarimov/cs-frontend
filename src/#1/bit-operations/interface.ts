export interface BitOperations {
    get: (indexArray: number, indexByte: number) => number;
    set: (indexArray: number, indexByte: number, bit: number) => void;
}