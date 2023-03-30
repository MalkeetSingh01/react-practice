
## 1
React may batch multiple setState() calls into a single update for performance In React, this.state may not always contain the most up-to-date value of the component's state because of the asynchronous nature of setState method. 

## 2
 preventDefault() is used to prevent the default behavior of an event, such as preventing a form submission or a link from navigating to a new page.

## 3
 event bubbling refers to the behavior where an event triggered on a nested element will "bubble up" through its parent elements and trigger any event listeners attached to those parent elements. This can sometimes cause unintended consequences, such as triggering multiple event handlers when only one is intended.

## 4
To prevent event bubbling, you can use the stopPropagation() method. This method stops the event from propagating further up the DOM tree, preventing it from triggering any additional event listeners

## 5
The setState method is asynchronous, and React batches multiple setState calls together for performance reasons. This means that the callback function you pass to setState may not execute immediately after the state update.

Instead, React adds the state update to a queue and applies the updates in batches. Once the batch is complete, React triggers a re-render of the component, and the callback function is executed with the updated state values.

So, when you use a callback function with setState, it is executed after the state has been updated and React has triggered a re-render of the component. This ensures that you are always working with the latest version of the state and props.

Using a callback function with setState is a safe and reliable way to update the state in a React component.

## 6
 In React, state is meant to be local or encapsulated, which means that it should be managed within the component that owns it and not directly accessible from other components.

Neither the parent nor child components should know whether a certain component is stateful or stateless. They should only interact with the component through its props and not be concerned about its internal state management. This separation of concerns helps to keep the code more modular and easier to maintain.

## 7
it is possible to import functional components inside class components and vice versa