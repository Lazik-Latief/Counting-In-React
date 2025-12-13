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