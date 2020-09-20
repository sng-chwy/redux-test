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

##### Directory
This component lists the files and directories in the current directory.
Clicking on any of the directories will load the contents of that directory.

##### DirectoryBreadcrumb
This component lists the directories in the current path. Clicking on any of the links will load the contents of that directory.

##### Things that would be cool to add
Move files from one location to another
Viewing text files in the browser and downloading
Refreshing the page does not load the root directory

### Redux Store Details
