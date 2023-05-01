import {LinkedList} from "./LinkedList";

const list = new LinkedList<number>();

list.addLast(1);
list.addLast(2);
list.addLast(3);

console.log(list.first.value);           // 1
console.log(list.last.value);            // 3
console.log(list.first.next.value);      // 2
console.log(list.first.next.prev.value); // 1

for (const item of list) {
    console.log(item);
}