import React from 'react';

// functional component - arrow function
// For smaller components
// Reusable component
// presentional components, parttialy right, we can user Hooks
// const About = () => {
//     const message = 'Hello World';
//     return (
//     <h1>Hello About Page {message}</h1>
//     )
// }

class About extends React.Component {
    render() {
        return (
            <h1>Hello I am class component</h1> 
        )
    }
}

export default About 