import * as React from 'react';

import _ from 'lodash';
import { Avatar, AvatarMessageItem, Box, Button, ChatInfoActionList, Icon, IconButton, RightSideBarHeader, Text } from '@components';
import { ChatInfoProps } from '@types';
import { useContactsQuery } from '@generated';
import { Contact } from '@model';
import { useRouter } from 'next/router';



const ChatInfo: React.FC<ChatInfoProps> = ({
  chat,
  userId,
  contactId,
  headerHeight
}) => {

  const router = useRouter();

  const contactResponse = useContactsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      where: {
        contactUserId: contactId
      },
      cursor: {
        userId: userId,
        contactUserId: contactId
      }
    }
  })

  const contact = new Contact(contactResponse.data?.Contacts[0]!);

  const chatParticipants = chat?.participants!;

  const closeMessageInfo = () => {
    const baseRoute = router.asPath.replace(/&?displayChatInfo=true+/, '');
    router.push(baseRoute);
  }


  return (
    <Box h={'100%'} overflowY={'auto'}>
      <RightSideBarHeader
        text={chat?.isGroup ? 'Group Information.' : 'Contact Information.'}
        height={headerHeight}
        onCloseFunction={closeMessageInfo}
      />
      <Box h={'230px'} bg={'#111b21'} display='flex' alignItems={'center'} justifyContent={'center'}>
        <Box textAlign={'center'}>
          <Avatar
            name={chat?.isGroup ? chat.name : contact.name}
            size={'2xl'}
          />
          <Text color={'#e9edef'} marginTop={'10px'} fontSize={'20'}>
            {chat?.isGroup ? chat.name : contact.name}
          </Text>
          <Text color={"#8696a0"} marginTop={'8px'}>
            {chat?.isGroup ? `Group · ${chat.getAmountOfParticipants()} members` : contact.phoneNumber}
          </Text>
        </Box>
      </Box>
      {
        chat?.isGroup ?
          <>
            <Box marginTop={3}>
              <Box color={"#8696a0"} bg={'#111b21'} display="flex" alignItems={'center'} h={'60px'}>
                <Text marginLeft={'15px'}>
                  {`${chat?.getAmountOfParticipants()} members`}
                </Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                bg={'#111b21'}
                color={'white'}
                h={`56px`}>
                <Box bg='#00a884' borderRadius='3xl' marginRight={3} marginLeft={2.5}>
                  <IconButton
                    icon={'addUser'}
                    colorScheme={'inherit'}
                    size={'lg'}
                    fontSize={'xl'}
                    onClick={() => { }} />
                </Box>
                <Box>
                  Add member
                </Box>
              </Box>
              {chatParticipants?.map((participant) => (
                <AvatarMessageItem
                  key={participant.userId}
                  bg={'#111b21'}
                  title={participant.user?.fullName}
                  titleWidth="sm" />
              ))}
            </Box>
            <Box bg={'#111b21'} marginTop={3} marginBottom={6}>
              <ChatInfoActionList options={[
                {
                  iconType: 'exit',
                  onClick: () => {},
                  text: 'Exit group'
                }
              ]}/>
            </Box>
          </>
          :
          <Box bg={'#111b21'} marginTop={3} marginBottom={6}>
             <ChatInfoActionList options={[
                {
                  iconType: 'block',
                  onClick: () => {},
                  text: `Block ${contact.name}`
                },
                {
                  iconType: 'delete',
                  onClick: () => {},
                  text: 'Delete chat'
                }
              ]}/>
          </Box>
      }

    </Box>

  );
}

export default React.memo(ChatInfo, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});