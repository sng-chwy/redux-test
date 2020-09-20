import os
import json
from flask import Flask

app = Flask(__name__)
rootPath = "./Files"

@app.route('/')
def root():
	return

@app.route('/tree')
def getFileTree():
	directories = getDirectories()
	return json.dumps({"root": rootPath, "directories": directories})

# [{"directories": ["project1", "project3", "project2"], "files": [], "path": "./Files"}, 
# {"directories": ["notes", "examples"], "files": ["README.md"], "path": "./Files/project1"}, 
# {"directories": [], "files": ["notes1.txt"], "path": "./Files/project1/notes"}, 
# {"directories": ["xml", "json"], "files": [], "path": "./Files/project1/examples"}, 
# {"directories": [], "files": [], "path": "./Files/project1/examples/xml"}, 
# {"directories": [], "files": ["project1.json"], "path": "./Files/project1/examples/json"}, 
# {"directories": [], "files": [], "path": "./Files/project3"}, {"directories": ["this"], "files": [], "path": "./Files/project2"}, 
# {"directories": ["goes"], "files": [], "path": "./Files/project2/this"}, {"directories": ["deep"], "files": [], "path": "./Files/project2/this/goes"}, 
# {"directories": [], "files": ["treasure.txt"], "path": "./Files/project2/this/goes/deep"}]

def getDirectories():
	fileTree = []
	for (root, dirs, files) in os.walk(rootPath):
		# If you used an object, the lists wouldn't serialize to json. just using a pure dictionary will serialize all fields
		directory = {"directories": [], "files": [], "path": root}
		for file in files:
			directory["files"].append(file)
		for dirname in dirs:
			directory["directories"].append(dirname)
		fileTree.append(directory)

	return fileTree
