import * as React from 'react';

import _ from 'lodash';

import { Box, TextInputIcon } from '@components';
import { useTranslation } from '@/shared/hooks';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

const ChatSearchBar: React.FC = () => {
	const { t } = useTranslation();

	const [searchValue, setSearchValue] = useState('')
	const [debouncedValue] = useDebounce(searchValue != '' ? searchValue : '', 700);

	const router = useRouter();
	const searchParams = useSearchParams();

	const urlSearchParam = searchParams.get("searchBy")!;


	const handleInputChange = React.useCallback((event: any) => {
		const value = event.target.value;
		setSearchValue(value);
	}, []);


	const filterChatsBy = () => {
		const isSearchEmpty = debouncedValue === '';

		if (searchParams.has("searchBy") || isSearchEmpty) {
			if (debouncedValue !== urlSearchParam) {
				if (!isSearchEmpty) {
					const baseRoute = router.asPath.replace(/&?searchBy=\w+/, '');
					if(searchParams.has("chatId")){
						router.push(`${baseRoute}&searchBy=${debouncedValue}`);
					}else{
						router.push(`${baseRoute}?searchBy=${debouncedValue}`);
					}
				} else {
					const baseRoute = router.asPath.replace(/&?searchBy=\w+/, '');
					router.push(baseRoute);
				}
			}
		} else {
			if(searchParams.has("chatId")){
				router.push(`${router.asPath}&searchBy=${debouncedValue}`);
			}else{
				router.push(`${router.asPath}?searchBy=${debouncedValue}`);
			}
		}
	};

	React.useEffect(() => {
		filterChatsBy();
	}, [debouncedValue])



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
				inputText={searchValue} />
		</Box>
	);
}

export default React.memo(ChatSearchBar, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});