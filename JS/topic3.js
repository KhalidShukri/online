// topic3. DOM(Document Oriented Model)

// 3.1 introduction to DOM

// It is a programming interface for web documents
// it represents the structure of a web page as atree-like hierachy of nodes where each node represents an HTML element,attribute or a text code ,or, comment

// The DOM provides a way for javascript to interact and maniplate the content ,the structure and style of a web-page dynamically

// It allows developers to access and modify the documents elements, attributes and contents through a structured and standardized application procarmming interface (API)


// 3.2.Selecting and amnipulate elements
// JavaScript provides several methods to select and manipulate elements in the DOM;
// /1.getElementByid(id):selects an element by its unique id attribute
// 2.getElementbyTagNmae(Tagname): selects element by their  tag name e.g. div ,returns an HTML collection
// 3.getElementByClass(ClassName): slects an element by its class name
// 4.querySelector(selection): Selects the first element that matches the specified CSS selcetor
// 5.querySelectorAll(selection); selcts all elements that amtch the selection. it returns a node list


// /once you have selected an element, you can manipulate the properties,styles and content using various methods and properties provided by the DOM API.

// 3.3 Working with Events

// events are actions or occurrences that happen in the browser such as user interactions(clicks,keyboards.etc), network events, or , timer events
// JavaScript allows you to respond to this events by attaching event handlers
// a.Event types and event handlers
// /-User events: clicks, mouseup,mousedown,keypress,keyup,keydown
// /- window events: load, resize, scroll, haschange
// -form events; submit,change,input,invalid
// media events:play,pause,ended,seeked

// b.Adding and removing Event Listeners
element.addEventListener(eventType,eventHandler);
element.removeEventListener(eventType,eventHandler);

// 3.4 DOM traversal
// The DOM provides methods for traversing and accessing different nodes in the document tree
// a. parent,Child and Siblings node
//  parent node-the parent node of the currnet node
//  Child node-A collection of child node of the current node
//  FirstChild and LastChild nodes- thse are the first and the last child nodes
//   nextSibling and previousSibling-these are the fisr and the last sibling nodes

// b.Navigating and accessing node relationships
//  - parentElement-parent node of the cuurent node
//  - children: a collection pf child nodes of the parent node
//  - FirstElemwntChild and LastElementChild-thse are the first and the last child element nodes
// nextElementSibling and previousElementSibling-these are the fisr and the last sibling element nodes

// c.nodelists and HTMLCollections
// NodeList:an array-like collection of nodes returned by methods like qyeryuSelectorAll()
// HTMLCollection-an array-like collection of HTML tags that are retirnrd by methods such as GetElementByid