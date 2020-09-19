Idea here is that we use Redux to get data from a server and store data in a global store.

The example here that we will use is a remote file directory.

The server will respond with the entire file directory.
Redux store will store that entire directory.
When you move up and down the file tree, you don't have to get the file tree again since it is stored globally.
You can also move files from one location to another without querying to get the file tree again.
