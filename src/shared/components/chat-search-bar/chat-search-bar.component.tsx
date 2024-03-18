import * as React from 'react';

import _ from 'lodash';

import { Box, TextInputIcon } from '@components';
import { useTranslation } from '@/shared/hooks';

const ChatSearchBar: React.FC = () => {
	const {t} = useTranslation();
	return (
		<Box bg={'#111b21'} padding={2}>
			<TextInputIcon
				inputBackgroundColor={'#202c33'}
				leftIconType={'search'}
				rightIconType={'filter'}
				inputPlaceholder={t('chatSearchBar.placeholderText')}
				onLeftIconClick={() => { alert('Search has been made') }}
				onRightIconClick={() => { alert('filter clicked') }} />
		</Box>
	);
}

export default React.memo(ChatSearchBar, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});