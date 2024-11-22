import * as React from 'react';

import _ from 'lodash';
import { AvatarIconItem, Box, IconButton } from '@components';
import { ChatHeaderProps } from '@types';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useTranslation } from '@/shared/hooks';


const ChatHeader: React.FC<ChatHeaderProps> = ({
  height,
  data,
  user
}) => {

		if(!data?.isGroup){
      let contactName = user.getContactName(data.getContactParticipants(user)!)
			
      if(!contactName){
				contactName = data.participants?.find(cp => cp.userId != user.userId)?.user?.fullName!;
			}
      
      data.title = contactName;
		}
	

  const router = useRouter();
  const searchParams = useSearchParams();
  const {t} = useTranslation()

  const handleClick = React.useCallback(() => {
    if(!searchParams.has('displayChatInfo') && searchParams.has('chatId')){
      const baseRoute = router.asPath.replace(/&?messageId=\d+/, '');
      router.push(`${baseRoute}&displayChatInfo=true`);
    }
  }, [data.id]);

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
        subtitle={data.getSubtitle(user, t('chatHeader.ReferToMySelfAs'))}
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
              onClick={() => { alert('search click'); } } aria-label={''}/>
            <IconButton
              style={{
                marginTop: '4px'
              }}
              icon={'dots'}
              colorScheme={'inherit'}
              size={'lg'}
              fontSize={'xl'}
              onClick={() => { } } aria-label={''}/>
          </>
        } />

    </Box>

  );
}

export default React.memo(ChatHeader, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});