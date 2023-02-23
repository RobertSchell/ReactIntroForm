# ReactIntroForm

README.md
Project Setup:
Create a new github repo called ReactIntroForm with the following options:
Clone the repo to your computer and add the link to populi
cd into the ReactIntroForm directory
Run 'npx create-react-app .' to initialize react in the repository
Run 'npm start' after react has finished installing
If the above worked properly, you should see the react start page on localhost:3000
Open App.js and replace the App functional component with this code:
function App() { return (
); }
Creating the Component:
Create a new functional component called MovieForm
Be sure to include props as the first function parameter and be sure to have a single enclosing
tag in the JSX of the return statement
Add a title to the JSX of the MovieForm component inside the
tags
Movie Form
Add as a new component inside of the JSX of the component between the two
tags
- If you did this right, then on localhost:3000, you should see the heading "Movie Form" on the page
Building out :
At the top of the App.js file, import useState from react
import { useState } from "react";
Add a new state variable to called "title" along with its setter function "setTitle" initalized to an empty string:
const [title, setTitle] = useState("")
In the JSX of (inside the enclosing divs), add a new text input field and a label that says "Title:"
return (
Title:
) - In the input field you just created, add an onChange handler that will call setTitle with the value from the onChange event - { setTitle(event.target.value) }}/> - If this event handler works, it should update the title state variable with the new value entered into the text field. - [Optional]: The easiest way to check that it is working is to add a console.log of title between the title state variable definition and the JSX return statement of - const [title, setTitle] = useState("") console.log(title) return ( /* ...JSX of MovieForm */ ) - Display the current value of title in the JSX of in
tags so that you/the user can see the value of title update in real time - return (

Title: { setTitle(e.target.value) }}/>
Current Title: {title}

) - If you did the above correctly, you should be able to type into the title text input field and see the current title update as you type
Implement Additional fields:
In repeat the process in step 3 to add the following type="text" input fields to the form:
director, actors, plot
Note: Since these are type="text" input fields, the state variables for director, actors, plot should be initalized to an empty string: ""
In repeat the process in step 3 to add the following type="number" input fields to the form:
year, imdbRating
Note:
For these two input fields, the state variables should be initialized to 0.
For the imdbRating input field, add the attribute step="0.1" to it so that you can increment the value by a tenth at a time.
