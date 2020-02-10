## Notes

### Important Note

- CarID is store in a config file and is required in mutation and query file under graphQL. This is not a right approach. It has to come from UI as an input.
- Engine data is missing. I should have found this and asked before coding. Pardon me.
- Took bit time to figure out GraphQL

### About Store

- I have used React-redux as a global management.
- I could have also used useContext + useReducer as well, but due to several down side I have kept aside for now
- I have used redux only for storing the Car information.
- Task data is stored and maintained in its own component called Task. Since task is not shared across I have limited with in task component.
- Action, reducers and its relative constants are grouped under Store
- Operation is the only file that can be interacted to maintain the store. It helps in dispatching as well maintaining the store

### About Components and Containers

- I could have used ANTD or any other UI library. But felt this wont be a right approach for a test
- I have dynamically generated Inputs for both Status and From to add add information. This gives more flexibilty to dynamically control the number of forms to be visible from backend
- All inputs related with form are grouped under input
- I have introduced Paper component which servers Information form and Task.
- Presentation layer will also have its own state, but ideally its limited locally. Only used in Inputs

### Feature I have used

- Portal for showing the Modal
- React-redux with Hooks
- Scalable architecture
- Styled components for styling

### What I could have done more

- Cleaning up the APP and validations
- Optimization (React memoization to avoid re-render.)
- Error Boundaries to sustain the APP even if the error exisit.
- Better Git Commit
- More test cases.
- Better loader
