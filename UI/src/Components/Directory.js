import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux'

import { getCurrentDir, getRootDirPath } from '../redux/selectors'
import { setCurrentDir } from '../redux/actions'

const FileLink = (props) => {
	const { name, handleClick } = props;

	return (
		<Link color="inherit" href="/" onClick={handleClick}>
	        {name}
      	</Link>
	);
};

const Directory = (props) => {
	const { currentDir, rootDir, setCurrentDir } = props;

	if (!currentDir) {
		return <CircularProgress />
	}

	const handleClickDir = dirName => {
		setCurrentDir(currentDir.path.concat('/', dirName));
	};

	const parentDirLink = (
		<Box key={0} my={1}>
			<FileLink name={'../'} handleClick={event => {
				event.preventDefault();
				console.log('click')
			}} />
		</Box>
	);

	let directories = currentDir.directories.map((file, index) =>
		<Box key={index + 1} my={1}>
			<FileLink name={file} handleClick={event => {
				event.preventDefault();
				handleClickDir(file);
			}} />
		</Box>
	);


	if (rootDir !== currentDir.path) {
		directories = [parentDirLink].concat(directories);
	}

	const files = currentDir.files.map((file, index) =>
		<Box key={index + directories.length + 1} my={1}>
			<FileLink name={file} handleClick={event => {
				event.preventDefault();
				console.log('click')
			}} />
		</Box>
	);

	return directories.concat(files);
};

// Syntax matters lol just returning {} was giving an error
// Here we are mapping how props are selected from the store
const mapStateToProps = state => ({ currentDir: getCurrentDir(state), rootDir: getRootDirPath(state) });

export default connect(mapStateToProps, { setCurrentDir })(Directory);