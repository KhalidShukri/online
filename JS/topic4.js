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