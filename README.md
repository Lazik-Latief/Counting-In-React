# React Counter App

## Introduction
This is a simple Counter application built using React with Vite.
The app increases and decreases a number when buttons are clicked.
This project helped me understand basic React concepts.

## Technologies Used
- React
- JavaScript
- CSS
- Vite

## Project Structure
- `App.jsx` – Main React component
- `App.css` – Styling file
- `main.jsx` – Renders the App component
- `index.html` – Single HTML file

## React Component
A React component is a JavaScript function that returns UI.

```js
function App() {
  return <h1>Counter App</h1>;
}


React displays whatever is returned from the component.

In javaScript we ha to o a lot of things to upate variables in webpage like getting elements by id/classname etc then updating them one by one but in react it is very easy because of useState 

useState Hook 
useState is used to store and update data in React.

const [count, setCount] = useState(2);

count stores the current value
setCount updates the value
Updating state automatically updates the UI

Button Functions
Buttons use functions to change the counter value.

setCount(count + 1); // increase value
setCount(count - 1); // decrease value

I changed these above functions into real nes like i took them out of onClick and made them outside of buttons and used if (conditons) to each so the values can be in a range from 0 to 20 only 

i learned that in react we use variables and funtions in same way when it comes to call funtions eg. {count} and  {addValue} one is variable and other one is function
Why return is Used

Every React component must return JSX.
The returned JSX decides what appears on the screen.

Why return is Used
Every React component must return JSX.
The returned JSX decides what appears on the screen.

What I Learned

How React components work
How useState updates the UI
How functions handle button clicks
Basic JSX and component structure

Conclusion

This project helped me build a strong foundation in React basics
and understand how state controls the user interface.