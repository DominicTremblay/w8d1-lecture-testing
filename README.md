# Unit and Integration Testing with React and Jest

- Why Testing?
- Unit Testing vs Integration Testing vs End-to-End Testing
- JEST
- Anatomy of a test
- Demo: A rock-paper-scissors clone, `moai-axe-tree`

 ## Why Testing

 - ensure quality and reliability of your code
 - ensure that the code meets the requirements

 ### Unit Testing

- test a function or a component
- test the function in isolation
- ensures that new changes won't break the existing code

Ex.: form, test the format of an email when submiting the form


 ### Integration Testing 

 - individual units are combined and tested as a group

ex.: form, test that submission of the form gets the corresponding result. Submit form => get data from the API.

 ### End-to-End Testing

 - simulation of real user scenarios
 - Nice package Cypress

 ## JEST

 - why JEST?
 - all integrated: test runner + assertion
 - additional liraries to manipulate React components
 - it comes presinstall with create-react-app

 