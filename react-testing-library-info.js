/* React Testing library creates virtual DOM for testing and utilities for interacting with DOM. This allow testing without a browser.

Types of Tests:
Unit tests - test one unit of code in isolation > Function or React Component.

Integration tests - test how multiple units work together > Tests interaction between components or between different micro-services.

Functional Tests - test a particular function of software > general behaviour of app, how it functiones, example: entering data into form and clicking submit, then testing if it does what is expected from it.

Acceptance / End-to-end (E2E) Tests - Use actual browser and server (Cypress, Selenium).


UNIT TESTING is isolated, we mock dependencies and we test internals because we dont have other components to see what difference it does to our app. Its very easy to pinpoint failures. But its further from how users interact with software. Its more likely to break with refactoring.

FUNCTIONAL TESTING includes all relevant units, it tests behavior. Its close to how users interact with software. It has Robust tests and as long as behavior stays the same, tests should pass. It is more difficult to debug failing tests.


BDD - Behavior-Driven Development
Testing Library encourages testing behavior over implementation. BDD involves collaboration between lots of roles, developers, QA, business partners, etc. It defines process for different groups to interact.

Its best to target elements by role. w3e has role recomendations in W3E role definitions page. 

If our app cant find an element like a screen reader would then our app is not friendly to screen readers.

We test INTERACTIVITY using fireEvent.
jest-dom assertions:
- toBeEnabled()
- toBeDisabled()
- toBeChecked()
- not.toBeChecked()

getByRole option { name: }
Jest describe is used to group tests into logical groups.

Unit testing functions is testing single function when a component is complex and has a lot of functions inside it.
*/
