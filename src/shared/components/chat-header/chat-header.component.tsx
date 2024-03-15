import * as React from 'react';

import _ from 'lodash';
import { AvatarIconItem, Box, IconButton } from '@components';
import { ChatHeaderProps } from '@types';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';


const ChatHeader: React.FC<ChatHeaderProps> = ({
  height,
  data,
  user
}) => {

		if(!data?.isGroup){
      const contactName = user.getContactName(data.getContactParticipants(user)!);
			data.title = contactName;
		}
	

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    if(!searchParams.has('displayChatInfo') && searchParams.has('chatId')){
      const baseRoute = router.asPath.replace(/&?messageId=\d+/, '');
      router.push(`${baseRoute}&displayChatInfo=true`);
    }
  };

  return (
    <Box 
    h={`${height}px`} 
    borderLeftColor="#2f3b43"
    borderLeftWidth="2px" 
    zIndex={'1000'} 
    >
      <AvatarIconItem
        bg={'#202c33'}
        avatarSize={'sm'}
        title={data.title}
        subtitle={data.getSubtitle(user)}
        onClick={() => {handleClick()}} 
        style={{
          cursor: 'pointer'
        }}
        icons={
          <>
            <IconButton
              style={{
                marginTop: '4px'
              }}
              icon={'search'}
              colorScheme={'inherit'}
              size={'lg'}
              fontSize={'xl'}
              onClick={() => { alert('search click') }}
            />
            <IconButton
              style={{
                marginTop: '4px'
              }}
              icon={'dots'}
              colorScheme={'inherit'}
              size={'lg'}
              fontSize={'xl'}
              onClick={() => { }}
            />
          </>
        } />

    </Box>

  );
}

export default React.memo(ChatHeader, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});