***
# Questions

## 1. Why is it important to write clean code?
## 2. What is the difference between good comments and bad comments?
## 3. What is an array?
## 4. What are arrays useful for?
## 5. How do you access an array element?
## 6. How do you change an array element?
## 7. What are some useful array properties?
## 8. What are some useful array methods?
## 9. What are loops useful for?
## 10. What is the break statement?
## 11. What is the continue statement?
## 12. What is the DOM?
## 13. How do you target the nodes you want to work with?
## 14. How do you create an element in the DOM?
## 15. How do you add an element to the DOM?
## 16. How do you remove an element from the DOM?
## 17. How can you alter an element in the DOM?
## 18. When adding text to a DOM element, should you use textContent or innerHTML?
## 19. Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
## 20. How do “events” and “listeners” work?
## 21. What are three ways to use events in your code?
## 22. Why are event listeners the preferred way to handle events?
## 23. What are the benefits of using named functions in your listeners?
## 24. How do you attach listeners to groups of nodes?
## 25. What is the difference between the return values of querySelector and querySelectorAll?
## 26. What does a “nodelist” contain?
## 27. Explain the difference between “capture” and “bubbling”.
## 28. What is the difference between objects and arrays?
## 29. How do you access object properties?

***
# Answers

## 1. Writing clean code is important because it makes the code easier to understand and maintain, reduces bugs, and improves the overall quality of the code.
## 2. Good comments provide clear explanations of the code's purpose and functionality, while bad comments can be confusing, outdated, or redundant.
## 3. An array is a data structure that stores a collection of elements, which can be of any data type, and are indexed by integers.
## 4. The + operator can concatenate strings and add numbers, but if one operand is a string, the result will be a string.
## 5. Arrays are useful for storing and manipulating collections of data, such as lists of names, numbers, or objects.
## 6. You can access an array element by using its index number in square brackets, like this: myArray[2].
## 7. Useful array properties include length, which returns the number of elements in the array, and constructor, which returns the function that created the array.
## 8. Useful array methods include push, pop, shift, unshift, splice, concat, slice, and forEach, which perform various operations on the array and its elements.
## 9. Loops are useful for iterating over arrays or other collections of data, executing a block of code multiple times.
## 10. The break statement is used to exit a loop early, stopping the iteration and continuing execution after the loop.
## 11. The continue statement is used to skip the current iteration of a loop and move on to the next one.
## 12. The DOM (Document Object Model) is a programming interface for HTML and XML documents, allowing JavaScript to interact with and manipulate the content and structure of a web page.
## 13. You can target the nodes you want to work with using various methods, such as getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.
## 14. You can create an element in the DOM using the document.createElement method, passing the name of the element as a string argument.
## 15. You can add an element to the DOM using various methods, such as appendChild, insertBefore, and replaceChild, passing the element as an argument.
## 16. You can remove an element from the DOM using various methods, such as removeChild and replaceChild, passing the element or its parent as an argument.
## 17. You can alter an element in the DOM by accessing and changing its properties, such as className, style, or innerHTML, using dot notation or square brackets.
## 18. When adding text to a DOM element, you should generally use textContent, which sets the text content of the element as plain text, rather than innerHTML, which can potentially introduce security vulnerabilities and other issues.
## 19. When adding text to a DOM element, you should generally use textContent, which sets the text content of the element as plain text, rather than innerHTML, which can potentially introduce security vulnerabilities and other issues.
## 20. Events are actions or occurrences that happen in the browser, such as clicking a button or loading a page, and listeners are functions that are executed in response to those events.
## 21. Three ways to use events in your code are to add event listeners to specific elements, to handle events inline using the on<Event> attribute, or to use event delegation to handle events on parent elements.
## 22. Event listeners are the preferred way to handle events because they allow for more modular, maintainable code, and can handle multiple events and elements with a single function.
## 23. Named functions in your listeners provide better code organization, easier debugging, and the ability to remove the listener later if needed.
## 24. You can attach listeners to groups of nodes using various methods, such as addEventListener, forEach, or querySelectorAll, passing the nodes as arguments and a function to be executed as the listener.
## 25. The querySelector method returns the first element that matches a specified CSS selector, while the querySelectorAll method returns a NodeList of all elements that match the selector.
## 26. A NodeList is a collection of nodes returned by a method such as querySelectorAll or childNodes. It is similar to an array in that it is indexed and can be iterated over, but it is not actually an array and does not have all of the same methods.
## 27. When an event is triggered on an element, it can either propagate down the DOM tree (bubbling) from the outermost ancestor element down to the target element, or it can propagate up the tree (capturing) from the target element up to the outermost ancestor. The capture phase occurs first, followed by the target phase, and finally the bubbling phase.
## 28. Objects and arrays are both types of data structures in JavaScript, but they are used for different purposes. Arrays are used to store and manipulate lists of data, while objects are used to store and manipulate sets of key-value pairs.
## 29. Object properties can be accessed using dot notation or square bracket notation.