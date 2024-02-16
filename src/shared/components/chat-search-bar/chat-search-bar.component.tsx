import * as React from 'react';

import _ from 'lodash';

import { Box, TextInputIcon } from '@components';


const ChatSearchBar: React.FC = () => {
	return (
		<Box bg={'#111b21'} padding={1}>
			<TextInputIcon
				inputBackgroundColor={'#202c33'}
				leftIconType={'search'}
				rightIconType={'filter'}
				inputPlaceholder={'Search in chats'}
				onLeftIconClick={() => { alert('Search has been made') }}
				onRightIconClick={() => { alert('filter clicked') }} />
		</Box>
	);
}

export default React.memo(ChatSearchBar, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});