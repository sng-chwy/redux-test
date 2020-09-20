The goal of this repository is to play around with Redux (using React-Redux). 

The example here is a remote file directory. We get data about the remote file directory from a server and use Redux to store that data in a global store.

### Backend
The backend is a Python Flask app.
Root '/' endpoint doesn't return anything, just 200 OK.
The endpoint '/tree' returns the file tree with the root as '/Files' in the backend directory.

### UI
The frontend is a React app.

##### ActionView
This component includes the nav bar to make things look nice, the breadcrumbs for navigatiton, the directory and file listings.
Also initiates inital loading of the file directory data and sets the state of current directory and file tree.

The actions that the ActionView takes on the Redux store are: setting directory state, setting current dir state, setting root dir state.
It does not utilize any selectors.

##### Directory
This component lists the files and directories in the current directory.
Clicking on any of the directories will load the contents of that directory.

The actions that the Directory takes on the Redux store are: setting current dir state.
The selectors that the Directory uses are: get current dir, get root dir.

##### DirectoryBreadcrumb
This component lists the directories in the current path. Clicking on any of the links will load the contents of that directory.

The actions that the DirectoryBreadcrumb takes on the Redux store are: setting current dir state.
The selectors that the DirectoryBreadcrumb uses are: get current dir path.

##### Things that would be cool to add
Move files from one location to another
Viewing text files in the browser and downloading
Refreshing the page does not load the root directory

### Redux Store Details
The store was setup by using concepts and code from the react-redux basic tutorial https://react-redux.js.org/introduction/basic-tutorial

##### The Directory Reducer
Defines the state stored for the directory information:
* All Directories as an arry
* The current directory path as a string
* The root directory path as a string

##### The Store
The only reducer used at this time is the directory reducer, so the store only has directory related state

##### Configuration
The configureStore.js file was taken and modified from the page on configuring middleware for redux https://redux.js.org/recipes/configuring-your-store/#the-solution-configurestore

The functionality that is added is that logging is added for dispatch actions. This allows us to see what the payload for the action is and the next state after the dispatch completes.

##### Actions
The actions.js file can be thought of as defining the setters API for the store. Each function returns an object with a type and a payload object. Each type should have a corresponding case handled in the reducer. The payload is the information sent to the reducer to determine next state.

##### Selectors
The selectors.js file can be thought of as defining the getters API for the store. Each function accesses the store to return the requested global state.

##### Connecting to the Store
In order to either get or set the state within the store, the components on the UI have to use the connect method that React-Redux provides. The connect method accepts the setters and a mapping of labels to getters that the component requires from the store.
