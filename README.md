## Notes
- This project helps vendors to update the car detail status and task thats scheduled while checkup
- Checks how the data is been distributed across different views and efficient use of Store
- 


### Important Note

- CarID is store in a config file and is required in mutation and query file under graphQL. This is not a right approach. It has to come from UI as an input. Please ignore this config for now

### Application Setup

#### To Start App
- yarn install
- yarn start 
- open: http://localhost:3000/


### Features I have used
- React Portal for showing the Modal
- React-redux with Hooks
- Scalable architecture (Presentational layer and Container layer)
- Styled components for styling
- Jest + React-testing-lib for testing

### About Architecture, Containers, Components (Presentational layer)

- I could have used ANTD or any other UI library. But felt this wont be a right approach for a test
- I have dynamically generated Inputs for both Status and From with static data to generate initial information. This gives more flexibility to dynamically control the number of forms to be visible from backend
- All inputs related with form are grouped under input component
- I have introduced Paper component which servers both Car Information form component and Task component.
- Presentation layer will also have its own state, but ideally its limited locally. Only used in Inputs
- Containers are only dealing with global state, better separation of concern :).

### About Store

- I have used React-redux as a global management.
- I could have also used useContext + useReducer as well, but due to several down side I have kept aside for now
- I have used redux only for storing the Car information
- Keeping in mind that Redux is a global store where to only store the data which is used by different components. 
- Task data is stored and maintained in its own component called Task. Since task is not shared across I have limited with in task component.
- Action, reducers and its relative constants are grouped under Store
- Operation is the only file that can be interacted to maintain the store. It helps in dispatching as well maintaining the store

### Responsiveness

- Configured for all devices including Mobile, Tablet and Desktop. 
- This is achieved by using GRID, also helps in reducing number of media queries with performance. 
- Using grid, I could also control the placement of elements in layout. Its easy :)
- If there are sceneries where elements are grouped and has to be shown entirely different, separating the main component (inner layer) as presentation layer and the holder which holds this presentational layer can be configured in media queries
- Also as a performance booster, with the help of webpack I could extract or separate media queries from the page and load only for mobile device and desktop independently. improves TTI :)
- Moreover it also depends how glued or look of the components from desktop and mobile. I always love to separate with a component holder

### Testing
- Testing strategy, I have used React-lib with jest. 
- I prefer to write unit test cases more to achieve a faster result and then at the end implement integration test.
- I would always follow bottom to top approach testing pattern, where unit testing >  integration testing > UI testing. 

### Short coming of the designs
- I believe  updating Status form and make form could have bought together under one form and user could update the information upon only on submit. This helps is number of API calls been called. Currently on every change of input the API is been called. 


### What I could have done more

- Cleaning up the APP and validations
- Introduction of Webpack to have more flexibility for performance
- Optimization (React memoization to avoid re-render.)
- Error Boundaries to sustain the APP even if the error exisit.
- Better Git Commit
- More test cases.
- Better loader
