import * as React from 'react';

import _ from 'lodash';
import { Avatar, AvatarMessageItem, Box, ChatInfoActionList, IconButton, RightSideBarHeader, Text } from '@components';
import { ChatInfoProps } from '@types';
import { useContactsLazyQuery } from '@generated';
import { Contact } from '@model';
import { useRouter } from 'next/router';
import { useTranslation } from '@/shared/hooks';
import { useEffect } from 'react';



const ChatInfo: React.FC<ChatInfoProps> = ({
  chat,
  user,
  contactId,
  headerHeight
}) => {

  const router = useRouter();

  const [fetchContactByContactId ,contactResponse] = useContactsLazyQuery({
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() =>{
    fetchContactByContactId({
      variables: {
        where: {
          contactUserId: contactId
        },
        cursor: {
          userId: user?.userId,
          contactUserId: contactId
        }
      }
    })
  }, [contactId])

  let contact = new Contact(contactResponse.data?.contacts[0]!);
  
  if(!contact.data){
    contact = new Contact({
      fullName: chat!.participants?.find(cp => cp.userId != user!.userId)?.user?.fullName!,
      contactUserId: chat!.participants?.find(cp => cp.userId != user!.userId)?.user?.id!,
      contactUser: chat!.participants?.find(cp => cp.userId != user!.userId)?.user!,
    });
  }

  const chatParticipants = chat?.participants!;

  const closeMessageInfo = React.useCallback(() => {
    const baseRoute = router.asPath.replace(/&?displayChatInfo=true+/, '');
    router.push(baseRoute);
  },[])
  
  const {t} = useTranslation();

  return (
    <Box h={'100%'} overflowY={'auto'}>
      <RightSideBarHeader
        text={chat?.isGroup ? t('chatInformation.groupCloseTitle') : t('chatInformation.contactCloseTitle')}
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
            {chat?.isGroup ? `${t('chatInformation.groupAmountOfParticipants')} · ${chat.getAmountOfParticipants()} ${t('chatInformation.members')}` : contact.phoneNumber}
          </Text>
        </Box>
      </Box>
      {
        chat?.isGroup ?
          <>
            <Box marginTop={3}>
              <Box color={"#8696a0"} bg={'#111b21'} display="flex" alignItems={'center'} h={'60px'}>
                <Text marginLeft={'15px'}>
                  {`${chat?.getAmountOfParticipants()} ${t('chatInformation.members')}`}
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
                    onClick={() => { } } aria-label={''} />
                </Box>
                <Box>
                  {t('chatInformation.newMember')}
                </Box>
              </Box>
              {chatParticipants?.map((participant) => (
                user?.userId !== participant.userId ?
                <AvatarMessageItem
                  key={participant.userId}
                  bg={'#111b21'}
                  title={user?.isThisUserMyContact(participant.userId!) ? user.getContactName(participant.userId!) : participant.user?.phoneNumber?.toString()} 
                  subtitle={user?.isThisUserMyContact(participant.userId!) ? undefined : participant.user?.fullName}
                  avatarImage={user?.isThisUserMyContact(participant.userId!) ? undefined : `./images/defaultUserImage.png`}
                  titleWidth="sm" 
                  subtitleWidth='200px'/>
                  :
                  undefined
              ))}
            </Box>
            <Box bg={'#111b21'} marginTop={3} marginBottom={6}>
              <ChatInfoActionList options={[
                {
                  iconType: 'exit',
                  onClick: () => {},
                  text: t('chatInformation.exitGroupButton')
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
                  text: `${t('chatInformation.blockContactButton')} ${contact.name}`
                },
                {
                  iconType: 'delete',
                  onClick: () => {},
                  text: t('chatInformation.deleteChatButton')
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