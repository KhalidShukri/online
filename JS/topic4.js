// Topic4; contenet and CSS with javaScript

// 4.1Manipulating text content
// We can accessa and modify the text content of an element using the text content and inner text properties
// -> textContent: represents the text content of the node and it's senders. It returns a string with all the texts combined
// -. innerText: similar to textContent , but it takes into account CSS stylesheets and may render the text differently

const element  = document.getElementById99('myElement')

// /getting the text content of element 
element.textContent;
element.immerHTML;

// SETTING THE TEXT CONTENT
element.textContent = 'New Text Content'

// 4.2 Manipulating HTML Content
// The inner HTML property allows you to access and modify the HTML content of an element,including any child child elements it may have.

element.innerHTML = '<P> THIS IS A PARAGRAPH</P>'


// 4.3 Working with CSS styles
// JavaScript provides several ways to interact with and manipulate the css of an element

// 1.inline style with the 'style, property
element.style.property = value;
// This method allows you to set individual CSS prperties directly of the element's style objects


// 2. Accessing and modify CSS PROPERTIES
const elementstyle = window.getComputedStyle(element);
const color = element.getpropertyValue('color');
element.style.setproperty('color', 'red')

// you can get the getComputedStyle method to retrieve the computed style for an element, and then modify specific properites using the style SetProperty method


// 3.working with computed style
const fontsize = element.fontsize

// the GetComputedStyle method returns a live CSSstyledeclaration method representing the computed styles for the element, taking into account all active stylesheets and inlione styles

// 4.4 CSS Classes and 'classlist'
// The classlist property provides a convinient way to manipulate an element class list, allowwing you to add, remove or toggle CSS classes

const element  = document.getElementById99('myElement')

// adding a class
element.claaList.add('New class')
// removing a class
element.classList.remove('old class')
// toggling a class
element.classList.toggle('active')
// checking if an element has a class or not
element.classList.contains('active')

// 4.5. Modifying attributes using JavaScript
// you can modify attributes of an HTML element using the get Attribite and setAttribute

const element  = document.getElementById99('myElement')

// getting an attribute value

const src = element.getAttribute('src')

// ?setting an attribute value
element.setAttribute('src',"newimage.png")

// additionally you can directly access and modify certain attributes as properties of the element objects such as className, Href, and others
element.id = 'NewId'
element.class = 'New class'

// /4.6 Event Driven Content Updates

// JavaScript allows you to update the content of an element based on user interactions or other eventsjq.This is commonly done by attaching event handlers to elements and modifying their content or styles within the the event handler functions 
const button = document.getElementById('MyButton');
const content = document.getElementById('MyContent');

button.addEventListener('click',() => {
    content.textContent = 'New content added';
    content.style.color = 'red';
})

// In this exampe, when the button is clicked, the text content and color of the mycontent elements are updated dynamically using JavaScript

// Event driven content updates are fundamental to creating interactive and responsive user interfaces inweb applications

// topic 5 Creating and Removing elements

// 5.1 Creating new elements
// You can create new HTML elements dynamically using the create element method and append them to the DOM tree


const newElement = document.createElement('div')

// You can also create text nodes using the create text node method and append them as child nodes to an element

const textnode = document.createTextNode('This is a text node')


newElement.appendChild(textnode)

// 3.2 Appending and Inserting elements
//  Once you have created a new element you can append it into the DOM using various methods
// a. appendChild(node)-adds a new child node at the end of the child node list.

const parentElement = document.getElementById('parent');

parentElement.appendChild(newElement);

// b.insertBefore(new node,reference node) - inserts a new node before a specified reference node

const referencenode = document.getElementById('reference')
parentElement.insertBefore(newElement,referencenode)

// c.insertadjacentElement(position,element)- inserts an element relative to the current element based on the specififed position (beforeend),(beforebegin),(afterend),(afterbegin)
parentElement.insertAdjacentElement('beforeend'.newElement)

// 3.3 removing an element
// You can remove an element from the DOM using the removeChildElement on its parent node

const parentnode = document.getElementById('parent')
const childToRemove = document.getElementById('child')
parentElement.removeChild(childToRemove)


// alternatively you can use remove method directly or the elemt you want to remove

childToRemove.remove();

// Cloning elements
// the cloneNode creates a copy of an existing node in the DOM tree. it accepts a boolean parameter to indicate whether to perform a deep clone(including all the descendant node) or a shallow clone excluding the descendant nodes

const originalelement = document.getElementById('origina;')
const clonelement = originalelement.cloneNode(true);

// Cloning elements can be useful in scenarios where you need to create multiple copies of an element in the same structure and in the same content.

// 5.5 Replacing elements
// Ypu can replace an existing element in the DOM with a new element using the relaceChild method on the parent node

const parentelement = document.getElementById('parent')
const oldelement = document.getElementById('old')
const newelement = document.getElementById('div')
parentelement.replaceChild(newelement,oldelement)

// This ,ethod removes the child element from the DOM and inserts the new element in this place, preserving the position within the parent's node child nodea list

// Next JavaScript project  -> To-Do list
