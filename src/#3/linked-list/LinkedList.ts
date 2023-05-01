import {ILinkedList} from "#3/LinkedList/interface";
import {Nullable} from "index";

export class LinkNode<T> {
    public prev: Nullable<LinkNode<T>> = null;
    public next: Nullable<LinkNode<T>> = null;
    public value: T;

    constructor(value: T) {
        this.value = value;
    }
}

export class LinkedList<T> implements ILinkedList<T> {
    first: Nullable<LinkNode<T>> = null;
    last: Nullable<LinkNode<T>> = null;

    *[Symbol.iterator](): Iterator<T> {
        let node = this.first;

        while (node) {
            yield node.value;
            node = node.next;
        }
    }

    public addFirst(value: T): void {
        const newLink = new LinkNode(value);

        if (!this.first) {
            this.first = newLink;
            this.last = newLink;

            return;
        }
        newLink.next = this.first;
        this.first.prev = newLink;
        this.first = newLink;
    }

    public addLast(value: T): void {
        const newLink = new LinkNode(value);

        if (!this.first) {
            this.first = newLink;
            this.last = newLink;

            return;
        }
        this.last.next = newLink;
        newLink.prev = this.last;
        this.last = newLink;
    }

    public deleteFirst(): LinkNode<T> {
        if (!this.first) throw new Error("Item not found");

        const temp: LinkNode<T> = this.first;

        if (!this.first.next) {
            this.first = null;
        }
        this.first.next.prev = null;
        this.first = this.first.next;

        return temp;
    }

    public deleteLast(): LinkNode<T> {
        if (!this.last) throw new Error("Item not found");

        const temp: LinkNode<T> = this.last;

        if (!this.last.prev) {
            this.last = null;
        }

        this.last.prev.next = null;
        this.last = this.last.prev;

        return temp;
    }
}