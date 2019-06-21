//Traversing the DOM

let val;

const list = document.querySelector("ul.collection");

const listItem = document.querySelector("li.collection-item:first-child");


val = listItem;
val = list;

// Get child nodes: in the case below it gets more than the number of li because the LINEBREAR COUNTS: IT RETURNS ALL TYPE OF A  NODE LIST AS ELEMENT; ATTRIBUTE; TEXT NODE; COMMENT; ...
val = list.childNodes;



val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//THE NODE TYPE CAN BE:
/*
1 - Element
2 - Attribute (deprecated)
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype*/



//Better way to do: it returns a HTML collection
val = list.children;
val = list.children[1];
val = list.children[1].textContent = "hello List";

//Children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];
//First Child
val = list.firstChild;
val = list.firstElementChild;

//Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

val = listItem.nextElementSibling.previousElementSibling;

console.log(val);
