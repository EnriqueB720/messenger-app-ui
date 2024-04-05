import * as React from 'react';

import _ from 'lodash';

import { Box, TextInputIcon } from '@components';
import { useTranslation } from '@/shared/hooks';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

const ChatSearchBar: React.FC = () => {
	const {t} = useTranslation();

	const [searchValue, setSearchValue] = useState('')
  const [debouncedValue] = useDebounce(searchValue, 500);


  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setSearchValue(value);
  };

	const filterChatsBy = () => {
		const isSearchEmpty = searchValue === '';
	}

	const handleKeyDown = async (event: any) => {
    if (event.key === 'Enter' && searchValue != '') {
      
    }
  };


	return (
		<Box bg={'#111b21'} padding={2}>
			<TextInputIcon
				inputBackgroundColor={'#202c33'}
				leftIconType={'search'}
				rightIconType={'filter'}
				inputPlaceholder={t('chatSearchBar.placeholderText')}
				onLeftIconClick={filterChatsBy}
				onRightIconClick={() => { alert('filter clicked') }}
				onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
				inputText={searchValue} />
		</Box>
	);
}

export default React.memo(ChatSearchBar, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});