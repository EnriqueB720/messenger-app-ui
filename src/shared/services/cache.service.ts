import { Chat } from '@model';
import { ChatDocument, ChatsDocument, ChatsQuery, CreateDirectMessageMutation, CreateGroupMessageMutation, MessageSentSubscription, Chat as ChatRequestData, Message} from '@generated';
import { InMemoryCache } from '@apollo/client';

export default class InsideCacheService{

  public cache!: InMemoryCache;
  constructor(cache: InMemoryCache){
    this.cache = cache;
  }
  public updateDirectMessageChatDocument(chat: Chat, message: CreateDirectMessageMutation){
    this.cache.writeQuery({
      query: ChatDocument,
      variables: {
        where: {
          id: chat.id
        }
      },
      data: {
        chat: {
          ...chat.data,
          messages: [
            ...(chat.data.messages || []),
            message?.createDirectMessage
          ]
        }
      }
    });
  }

  public updateGroupMessageChatDocument(chat: Chat, message: CreateGroupMessageMutation){
    this.cache.writeQuery({
      query: ChatDocument,
      variables: {
        where: {
          id: chat.id
        }
      },
      data: {
        chat: {
          ...chat.data,
          messages: [
            ...chat.data.messages as any,
            message?.createGroupMessage
          ]
        }
      }
    });
  }

  public updateSubscriptionMessageChatDocument(chat: Chat, openChatId: number, message: MessageSentSubscription){
    this.cache.writeQuery({
      query: ChatDocument,
      variables: {
        where: {
          id: message.messageSent.chatId === openChatId ? chat.id : undefined
        }
      },
      data: {
        chat: {
          ...chat.data,
          messages: [
            ...chat.data?.messages! as any,
            message.messageSent
          ]
        }
      }
    });
  }

  public getChatsDocumentByUser(userId: number) : ChatRequestData[]{

    const { chats } = this.cache.readQuery({
      query: ChatsDocument,
      variables:{
        where:{
          userId
        }
      }
    }) as ChatsQuery;

    return chats;
  }

  public updateChatsDocument(userId: number, chats: ChatRequestData[], message: Message){
    this.cache.writeQuery({
      query: ChatsDocument,
      variables:{
        where:{
          userId
        }
      },
      data: {
        chats: chats.map(item => {
          const newChat = { ...item }
          if (message.chatId === newChat.id) {
            newChat.messages = [
              ...(newChat.messages || []),
              {
                text: message.text,
                createdAt: message.createdAt,
                senderId: message.senderId
              }
            ]
          }

          return newChat
        })
      }
    });
  }
}
