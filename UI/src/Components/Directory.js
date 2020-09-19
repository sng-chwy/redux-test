import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux'

import { getCurrentDir } from '../redux/selectors'

const FileLink = (props) => {
	const { name, handleClick } = props;

	return (
		<Link color="inherit" href="/" onClick={handleClick}>
	        {name}
      	</Link>
	);
};

const Directory = (props) => {
	const { currentDir } = props;

	if (!currentDir) {
		return <CircularProgress />
	}

	const files = ["../"].concat(currentDir.directories).concat(currentDir.files);

	return files.map((file, index) =>
		<Box key={index} my={1}>
			<FileLink name={file} handleClick={() => console.log('click')} />
		</Box>
	);
};

const mapStateToProps = state => { currentDir: getCurrentDir(state) };

export default connect(mapStateToProps, null)(Directory);