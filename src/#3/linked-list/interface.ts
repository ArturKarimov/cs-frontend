import {LinkNode} from "./LinkedList";

export interface ILinkedList<T> {
    addFirst: (value: T) => void;
    addLast: (value: T) => void;
    deleteFirst: () => LinkNode<T>;
    deleteLast: () => LinkNode<T>;
}