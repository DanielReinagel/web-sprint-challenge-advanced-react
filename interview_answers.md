# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
  A stateful component is a component that holds some state. A functional component is a component that is made with the function syntax rather than the class syntax. A functional component can be a stateful component. It also might not be if it doesn't happen to have any state.
2. When does a componentWillMount function be called? What about a componentWillUpdate?
  componentWillMount and componentWillUpdate are old and it's bad practice to use them. Instead, we should use componentDidMount and componentDidUpdate. componentDidMount triggers immediately after the component has fully rendered. componentDidUpdate triggers immediately after state has changed or there is a change in props.
3. Define stateful logic.
  Stateful logic is anything that involves declaring or changing state.
4. What are the three step of creating a successful test? What is done in each phase?
  Assemble (The context of where the test is happening)
  Act (The action that a user might perform)
  Assert (Asserting that the website responded appropriately if it did)