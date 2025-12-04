import "./styles.css";
import { LinkedList } from "./linked-list";

console.log("This is goldenvertex's default template");

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('rabbit');
list.removeAt(4);
list.insertAt('guinea pig', 4);

console.log(list);