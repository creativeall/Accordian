import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
const BasicExample=()=> {
  return (
    <div className='accordianStyle '> 
    <h1 className='heading'>React Interview Question❔</h1>
    <Accordion defaultActiveKey="0" className='center-div'>
      <Accordion.Item eventKey="0" className='mid-div'>
        <Accordion.Header>😊How to create components in ReactJS?</Accordion.Header>
        <Accordion.Body>
        Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mid-div'>
        <Accordion.Header>😊What is React?</Accordion.Header>
        <Accordion.Body>
        React (aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps based on components in a declarative approach.React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebooks News Feed in 2011 and on Instagram in 2012.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mid-div'>
        <Accordion.Header>😊What are props in React?</Accordion.Header>
        <Accordion.Body>
        Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mid-div'>
        <Accordion.Header>😊What is useState() in React?</Accordion.Header>
        <Accordion.Body>
        The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='mid-div'>
        <Accordion.Header>😊What are the differences between functional and class components?</Accordion.Header>
        <Accordion.Body>
        Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on a feature basis. After the introduction of Hooks, functional components are equivalent to class components.Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on a feature basis. After the introduction of Hooks, functional components are equivalent to class components.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className='mid-div'>
        <Accordion.Header>😊What are the advantages of using React?</Accordion.Header>
        <Accordion.Body>
        Use of Virtual DOM to improve efficiency,Gentle learning curve,SEO friendly,Reusable components,Huge ecosystem of libraries to choose from
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className='mid-div'>
        <Accordion.Header>😊What are the limitations of React?</Accordion.Header>
        <Accordion.Body>
        React is not a full-blown framework as it is only a library.The components of React are numerous and will take time to fully grasp the benefits of all.It might be difficult for beginner programmers to understand React.Coding might become complex as it will make use of inline templating and JSX.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" className='mid-div'>
        <Accordion.Header>😊What is virtual DOM in React?</Accordion.Header>
        <Accordion.Body>
        React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default BasicExample;
