import * as React from 'react';

import _ from 'lodash';
import { AvatarMessageItem, Box, Stack } from '@components';
import { useRouter } from 'next/router';
import { ChatListProps } from '@types';
import { useTranslation } from '@/shared/hooks';


const ChatList: React.FC<ChatListProps> = ({ data, user, maxH }) => {

	const router = useRouter();
	const backgroundColor = '#111b21';

	const { t } = useTranslation();

	const handleClick = React.useCallback((chatId: any) => {
		router.push(`?chatId=${chatId}`);
	}, []);

	const modifiedChats = data.map((chat) => {
		if (!chat.isGroup) {

			const contactName = user.contacts?.find(c => c.contactId == chat.getContactParticipants(user))?.name;
			chat.title = contactName;

			return chat;
		}

		return chat;
	})

	//console.log('Height: '+maxH)

	return (
		<Box bg={backgroundColor} overflowY={'auto'} maxH={maxH}>
			<Stack direction='column' divider>
				{
					modifiedChats.map((chat) => (
						<AvatarMessageItem style={{
							cursor: 'pointer'
						}}
							key={chat.id}
							bg={backgroundColor}
							title={chat.title}
							subtitle={user.userId === chat.lastMessage.senderId ? t('chatHeader.ReferToMySelfAs')+": "+chat.lastMessage.messageContent : chat.lastMessage.messageContent}
							value={JSON.stringify(chat.lastMessage) !== '{}' ? chat.lastMessage.messageDate : chat.createdAt}
							onClick={() => { handleClick(chat.id) }} />
					))

				}
			</Stack>
		</Box>
	);
}

export default React.memo(ChatList, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});