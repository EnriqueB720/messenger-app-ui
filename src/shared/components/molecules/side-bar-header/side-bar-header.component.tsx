import * as React from 'react';

import _ from 'lodash';

import { Avatar, Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@components';
import { SidebarHeaderProps } from '@types';
import { useCallback, useContext } from 'react';
import { useTranslation } from '@/shared/hooks';
import { AuthContext } from '@contexts';
import { Language } from '@/shared/generated/graphql-schema';


const SideBarHeader: React.FC<SidebarHeaderProps> = ({ data }) => {

	const { t } = useTranslation();
	const { logout } = useContext(AuthContext);

	const handleClick = useCallback((userId: any) => {
		alert('user-info clicked: ' + userId)
	}, []);

	const logUserOut = useCallback(async () => {
		await logout();
	}, []);
	
	return (
		<Box bg={'#202c33'} padding={1}>
			<Flex justifyContent={'space-between'}>
				<Box margin={1} marginRight={4}>
					<Avatar
						style={{ cursor: 'pointer' }}
						name={data?.userName}
						onClick={() => handleClick(data.userId)} />
				</Box>
				<Box>
					<Menu>
						<MenuButton
							as={"button"}
							title={"More options"}
						>
							<IconButton
								style={{
									marginTop: '4px'
								}}
								icon={'dots'}
								size={'lg'}
								colorScheme={'inherit'}
								fontSize={'xl'} />
						</MenuButton>
						<MenuList backgroundColor={'#202c33'}>
							<MenuItem
								backgroundColor={'#202c33'}
								color={"white"}
								onClick={logUserOut}
							>
								{t('logoutMessage')}
							</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			</Flex>
		</Box>
	);
}

export default React.memo(SideBarHeader, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});