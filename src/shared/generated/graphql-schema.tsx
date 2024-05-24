import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  isGroup?: Maybe<Scalars['Boolean']>;
  messages?: Maybe<Array<Message>>;
  name?: Maybe<Scalars['String']>;
  participants?: Maybe<Array<ChatParticipant>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type ChatCreateInput = {
  isGroup?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  participantIds?: InputMaybe<Array<ChatParticipantCreateManyChatInput>>;
};

export type ChatCreateNestedOneWithoutMessagesInput = {
  connect: ChatWhereUniqueInput;
};

export type ChatCreateNestedOneWithoutParticipantsInput = {
  connect: ChatWhereUniqueInput;
};

export type ChatOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type ChatParticipant = {
  __typename?: 'ChatParticipant';
  chatId?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Float']>;
};

export type ChatParticipantCreateInput = {
  chat: ChatCreateNestedOneWithoutParticipantsInput;
  user: UserCreateNestedOneWithoutChatParticipantsInput;
};

export type ChatParticipantCreateManyChatInput = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type ChatParticipantListRelationFilter = {
  every?: InputMaybe<ChatParticipantWhereInput>;
  none?: InputMaybe<ChatParticipantWhereInput>;
  some?: InputMaybe<ChatParticipantWhereInput>;
};

export type ChatParticipantWhereInput = {
  contactUserId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type ChatParticipantWhereUniqueInput = {
  chatId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isGroup?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<ChatParticipantListRelationFilter>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type ChatWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  contactUser?: Maybe<User>;
  contactUserId?: Maybe<Scalars['Float']>;
  fullName?: Maybe<Scalars['String']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ContactCreateInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['Int'];
  user: UserCreateNestedOneWithoutContactsInput;
};

export type ContactOrderByInput = {
  fullName?: InputMaybe<OrderByArg>;
  isBlocked?: InputMaybe<OrderByArg>;
  isFavorite?: InputMaybe<OrderByArg>;
};

export type ContactWhereInput = {
  contactUserId?: InputMaybe<Scalars['Int']>;
  fullName?: InputMaybe<Scalars['String']>;
  isBlocked?: InputMaybe<Scalars['Boolean']>;
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type ContactWhereUniqueInput = {
  contactUserId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type DirectMessageCreateInput = {
  contact: ContactWhereUniqueInput;
  sender: UserCreateNestedOneWithoutMessagesInput;
  text: Scalars['String'];
};

export type GroupMessageCreateInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  sender: UserCreateNestedOneWithoutMessagesInput;
  text: Scalars['String'];
};

export enum Language {
  English = 'ENGLISH',
  Spanish = 'SPANISH'
}

export type Message = {
  __typename?: 'Message';
  chatId?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  replyMessageId?: Maybe<Scalars['Float']>;
  sender?: Maybe<User>;
  senderId?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userMessageStatuses?: Maybe<Array<UserMessageStatus>>;
  uuid?: Maybe<Scalars['String']>;
};

export type MessageOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
};

export type MessageWhereInput = {
  chatId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  replyMessageId?: InputMaybe<Scalars['Int']>;
  senderId?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type MessageWhereUniqueInput = {
  chatId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  replyMessageId?: InputMaybe<Scalars['Int']>;
  senderId?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createContact: Contact;
  createDirectMessage: Message;
  createGroupChat: Chat;
  createGroupMessage: Message;
  createNewGroupParticipant: ChatParticipant;
  createUser: User;
};


export type MutationCreateContactArgs = {
  data: ContactCreateInput;
};


export type MutationCreateDirectMessageArgs = {
  data: DirectMessageCreateInput;
};


export type MutationCreateGroupChatArgs = {
  data: ChatCreateInput;
};


export type MutationCreateGroupMessageArgs = {
  data: GroupMessageCreateInput;
};


export type MutationCreateNewGroupParticipantArgs = {
  data: ChatParticipantCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export enum OrderByArg {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  ChatParticipant: Array<ChatParticipant>;
  chat: Chat;
  chats: Array<Chat>;
  contacts: Array<Contact>;
  filteredChats: Array<Chat>;
  messages: Array<Message>;
  user: User;
  userMessageStatus: Array<UserMessageStatus>;
};


export type QueryChatParticipantArgs = {
  where: ChatParticipantWhereUniqueInput;
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput;
};


export type QueryChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: InputMaybe<ChatOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: InputMaybe<ContactOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryFilteredChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: InputMaybe<ChatOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: InputMaybe<MessageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserMessageStatusArgs = {
  cursor?: InputMaybe<UserMessageStatusWhereUniqueInput>;
  orderBy?: InputMaybe<UserMessageStatusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserMessageStatusWhereInput>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Subscription = {
  __typename?: 'Subscription';
  messageSent: Message;
};

export type User = {
  __typename?: 'User';
  contacts?: Maybe<Array<Contact>>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  language?: Maybe<Language>;
  messages?: Maybe<Array<Message>>;
  phoneNumber?: Maybe<Scalars['Int']>;
  type?: Maybe<Role>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  passwordHash: Scalars['String'];
  phoneNumber: Scalars['Int'];
  type: Role;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutChatParticipantsInput = {
  connect: UserWhereUniqueInput;
};

export type UserCreateNestedOneWithoutContactsInput = {
  connect: UserWhereUniqueInput;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect: UserWhereUniqueInput;
};

export type UserMessageStatus = {
  __typename?: 'UserMessageStatus';
  isFavorite?: Maybe<Scalars['Boolean']>;
  isRead?: Maybe<Scalars['Boolean']>;
  isReceived?: Maybe<Scalars['Boolean']>;
  messageId?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Float']>;
};

export type UserMessageStatusOrderByInput = {
  isRead?: InputMaybe<OrderByArg>;
};

export type UserMessageStatusWhereInput = {
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  isReceived?: InputMaybe<Scalars['Boolean']>;
  messageId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type UserMessageStatusWhereUniqueInput = {
  messageId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  phoneNumber?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type ChatsQueryVariables = Exact<{
  where: ChatWhereInput;
}>;


export type ChatsQuery = { __typename?: 'Query', chats: Array<{ __typename?: 'Chat', uuid?: string | null, id?: number | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, isGroup?: boolean | null, messages?: Array<{ __typename?: 'Message', text?: string | null, createdAt?: any | null }> | null, participants?: Array<{ __typename?: 'ChatParticipant', userId?: number | null, user?: { __typename?: 'User', id?: number | null, fullName?: string | null, phoneNumber?: number | null } | null }> | null }> };

export type ChatQueryVariables = Exact<{
  where: ChatWhereUniqueInput;
}>;


export type ChatQuery = { __typename?: 'Query', chat: { __typename?: 'Chat', uuid?: string | null, id?: number | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, isGroup?: boolean | null, messages?: Array<{ __typename?: 'Message', id?: number | null, uuid?: string | null, chatId?: number | null, senderId?: number | null, text?: string | null, createdAt?: any | null, userMessageStatuses?: Array<{ __typename?: 'UserMessageStatus', isRead?: boolean | null, isReceived?: boolean | null, isFavorite?: boolean | null }> | null, sender?: { __typename?: 'User', fullName?: string | null, phoneNumber?: number | null } | null }> | null, participants?: Array<{ __typename?: 'ChatParticipant', userId?: number | null, user?: { __typename?: 'User', fullName?: string | null, id?: number | null, phoneNumber?: number | null } | null }> | null } };

export type FilteredChatsQueryVariables = Exact<{
  where: ChatWhereInput;
}>;


export type FilteredChatsQuery = { __typename?: 'Query', filteredChats: Array<{ __typename?: 'Chat', id?: number | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, isGroup?: boolean | null, messages?: Array<{ __typename?: 'Message', text?: string | null, createdAt?: any | null }> | null, participants?: Array<{ __typename?: 'ChatParticipant', userId?: number | null, user?: { __typename?: 'User', id?: number | null, fullName?: string | null, phoneNumber?: number | null } | null }> | null }> };

export type ContactsQueryVariables = Exact<{
  where: ContactWhereInput;
  cursor?: InputMaybe<ContactWhereUniqueInput>;
}>;


export type ContactsQuery = { __typename?: 'Query', contacts: Array<{ __typename?: 'Contact', fullName?: string | null, userId?: number | null, contactUserId?: number | null, contactUser?: { __typename?: 'User', phoneNumber?: number | null } | null }> };

export type CreateDirectMessageMutationVariables = Exact<{
  data: DirectMessageCreateInput;
}>;


export type CreateDirectMessageMutation = { __typename?: 'Mutation', createDirectMessage: { __typename?: 'Message', id?: number | null, uuid?: string | null, chatId?: number | null, senderId?: number | null, text?: string | null, createdAt?: any | null, userMessageStatuses?: Array<{ __typename?: 'UserMessageStatus', isRead?: boolean | null, isReceived?: boolean | null, isFavorite?: boolean | null }> | null, sender?: { __typename?: 'User', fullName?: string | null, phoneNumber?: number | null } | null } };

export type CreateGroupMessageMutationVariables = Exact<{
  data: GroupMessageCreateInput;
}>;


export type CreateGroupMessageMutation = { __typename?: 'Mutation', createGroupMessage: { __typename?: 'Message', id?: number | null, uuid?: string | null, chatId?: number | null, senderId?: number | null, text?: string | null, createdAt?: any | null, userMessageStatuses?: Array<{ __typename?: 'UserMessageStatus', isRead?: boolean | null, isReceived?: boolean | null, isFavorite?: boolean | null }> | null, sender?: { __typename?: 'User', fullName?: string | null, phoneNumber?: number | null } | null } };

export type MessageSentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSentSubscription = { __typename?: 'Subscription', messageSent: { __typename?: 'Message', id?: number | null, uuid?: string | null, chatId?: number | null, senderId?: number | null, text?: string | null, createdAt?: any | null, userMessageStatuses?: Array<{ __typename?: 'UserMessageStatus', isRead?: boolean | null, isReceived?: boolean | null, isFavorite?: boolean | null }> | null, sender?: { __typename?: 'User', fullName?: string | null, phoneNumber?: number | null } | null } };

export type MessagesQueryVariables = Exact<{
  where: MessageWhereInput;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id?: number | null, uuid?: string | null, chatId?: number | null, senderId?: number | null, text?: string | null, createdAt?: any | null, userMessageStatuses?: Array<{ __typename?: 'UserMessageStatus', isRead?: boolean | null, isReceived?: boolean | null, isFavorite?: boolean | null }> | null, sender?: { __typename?: 'User', fullName?: string | null, phoneNumber?: number | null } | null }> };

export type UserMessageStatusQueryVariables = Exact<{
  where: UserMessageStatusWhereInput;
}>;


export type UserMessageStatusQuery = { __typename?: 'Query', userMessageStatus: Array<{ __typename?: 'UserMessageStatus', isReceived?: boolean | null, isRead?: boolean | null, user?: { __typename?: 'User', id?: number | null, fullName?: string | null, phoneNumber?: number | null } | null }> };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, fullName?: string | null, phoneNumber?: number | null, contacts?: Array<{ __typename?: 'Contact', fullName?: string | null, contactUserId?: number | null }> | null } };


export const ChatsDocument = gql`
    query chats($where: ChatWhereInput!) {
  chats(where: $where) {
    uuid
    id
    name
    createdAt
    updatedAt
    isGroup
    messages {
      text
      createdAt
    }
    participants {
      user {
        id
        fullName
        phoneNumber
      }
      userId
    }
  }
}
    `;

/**
 * __useChatsQuery__
 *
 * To run a query within a React component, call `useChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useChatsQuery(baseOptions: Apollo.QueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
      }
export function useChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, options);
        }
export type ChatsQueryHookResult = ReturnType<typeof useChatsQuery>;
export type ChatsLazyQueryHookResult = ReturnType<typeof useChatsLazyQuery>;
export type ChatsQueryResult = Apollo.QueryResult<ChatsQuery, ChatsQueryVariables>;
export const ChatDocument = gql`
    query chat($where: ChatWhereUniqueInput!) {
  chat(where: $where) {
    uuid
    id
    name
    createdAt
    updatedAt
    isGroup
    messages {
      id
      uuid
      chatId
      senderId
      text
      createdAt
      userMessageStatuses {
        isRead
        isReceived
        isFavorite
      }
      sender {
        fullName
        phoneNumber
      }
    }
    participants {
      user {
        fullName
        id
        phoneNumber
      }
      userId
    }
  }
}
    `;

/**
 * __useChatQuery__
 *
 * To run a query within a React component, call `useChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useChatQuery(baseOptions: Apollo.QueryHookOptions<ChatQuery, ChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatQuery, ChatQueryVariables>(ChatDocument, options);
      }
export function useChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatQuery, ChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatQuery, ChatQueryVariables>(ChatDocument, options);
        }
export type ChatQueryHookResult = ReturnType<typeof useChatQuery>;
export type ChatLazyQueryHookResult = ReturnType<typeof useChatLazyQuery>;
export type ChatQueryResult = Apollo.QueryResult<ChatQuery, ChatQueryVariables>;
export const FilteredChatsDocument = gql`
    query filteredChats($where: ChatWhereInput!) {
  filteredChats(where: $where) {
    id
    name
    createdAt
    updatedAt
    isGroup
    messages {
      text
      createdAt
    }
    participants {
      user {
        id
        fullName
        phoneNumber
      }
      userId
    }
  }
}
    `;

/**
 * __useFilteredChatsQuery__
 *
 * To run a query within a React component, call `useFilteredChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilteredChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilteredChatsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFilteredChatsQuery(baseOptions: Apollo.QueryHookOptions<FilteredChatsQuery, FilteredChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilteredChatsQuery, FilteredChatsQueryVariables>(FilteredChatsDocument, options);
      }
export function useFilteredChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilteredChatsQuery, FilteredChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilteredChatsQuery, FilteredChatsQueryVariables>(FilteredChatsDocument, options);
        }
export type FilteredChatsQueryHookResult = ReturnType<typeof useFilteredChatsQuery>;
export type FilteredChatsLazyQueryHookResult = ReturnType<typeof useFilteredChatsLazyQuery>;
export type FilteredChatsQueryResult = Apollo.QueryResult<FilteredChatsQuery, FilteredChatsQueryVariables>;
export const ContactsDocument = gql`
    query contacts($where: ContactWhereInput!, $cursor: ContactWhereUniqueInput) {
  contacts(where: $where, cursor: $cursor) {
    fullName
    userId
    contactUserId
    contactUser {
      phoneNumber
    }
  }
}
    `;

/**
 * __useContactsQuery__
 *
 * To run a query within a React component, call `useContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useContactsQuery(baseOptions: Apollo.QueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
      }
export function useContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactsQuery, ContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContactsQuery, ContactsQueryVariables>(ContactsDocument, options);
        }
export type ContactsQueryHookResult = ReturnType<typeof useContactsQuery>;
export type ContactsLazyQueryHookResult = ReturnType<typeof useContactsLazyQuery>;
export type ContactsQueryResult = Apollo.QueryResult<ContactsQuery, ContactsQueryVariables>;
export const CreateDirectMessageDocument = gql`
    mutation createDirectMessage($data: DirectMessageCreateInput!) {
  createDirectMessage(data: $data) {
    id
    uuid
    chatId
    senderId
    text
    createdAt
    userMessageStatuses {
      isRead
      isReceived
      isFavorite
    }
    sender {
      fullName
      phoneNumber
    }
  }
}
    `;
export type CreateDirectMessageMutationFn = Apollo.MutationFunction<CreateDirectMessageMutation, CreateDirectMessageMutationVariables>;

/**
 * __useCreateDirectMessageMutation__
 *
 * To run a mutation, you first call `useCreateDirectMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDirectMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDirectMessageMutation, { data, loading, error }] = useCreateDirectMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDirectMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateDirectMessageMutation, CreateDirectMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDirectMessageMutation, CreateDirectMessageMutationVariables>(CreateDirectMessageDocument, options);
      }
export type CreateDirectMessageMutationHookResult = ReturnType<typeof useCreateDirectMessageMutation>;
export type CreateDirectMessageMutationResult = Apollo.MutationResult<CreateDirectMessageMutation>;
export type CreateDirectMessageMutationOptions = Apollo.BaseMutationOptions<CreateDirectMessageMutation, CreateDirectMessageMutationVariables>;
export const CreateGroupMessageDocument = gql`
    mutation createGroupMessage($data: GroupMessageCreateInput!) {
  createGroupMessage(data: $data) {
    id
    uuid
    chatId
    senderId
    text
    createdAt
    userMessageStatuses {
      isRead
      isReceived
      isFavorite
    }
    sender {
      fullName
      phoneNumber
    }
  }
}
    `;
export type CreateGroupMessageMutationFn = Apollo.MutationFunction<CreateGroupMessageMutation, CreateGroupMessageMutationVariables>;

/**
 * __useCreateGroupMessageMutation__
 *
 * To run a mutation, you first call `useCreateGroupMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMessageMutation, { data, loading, error }] = useCreateGroupMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateGroupMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMessageMutation, CreateGroupMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMessageMutation, CreateGroupMessageMutationVariables>(CreateGroupMessageDocument, options);
      }
export type CreateGroupMessageMutationHookResult = ReturnType<typeof useCreateGroupMessageMutation>;
export type CreateGroupMessageMutationResult = Apollo.MutationResult<CreateGroupMessageMutation>;
export type CreateGroupMessageMutationOptions = Apollo.BaseMutationOptions<CreateGroupMessageMutation, CreateGroupMessageMutationVariables>;
export const MessageSentDocument = gql`
    subscription messageSent {
  messageSent {
    id
    uuid
    chatId
    senderId
    text
    createdAt
    userMessageStatuses {
      isRead
      isReceived
      isFavorite
    }
    sender {
      fullName
      phoneNumber
    }
  }
}
    `;

/**
 * __useMessageSentSubscription__
 *
 * To run a query within a React component, call `useMessageSentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessageSentSubscription, MessageSentSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageSentSubscription, MessageSentSubscriptionVariables>(MessageSentDocument, options);
      }
export type MessageSentSubscriptionHookResult = ReturnType<typeof useMessageSentSubscription>;
export type MessageSentSubscriptionResult = Apollo.SubscriptionResult<MessageSentSubscription>;
export const MessagesDocument = gql`
    query messages($where: MessageWhereInput!) {
  messages(where: $where) {
    id
    uuid
    chatId
    senderId
    text
    createdAt
    userMessageStatuses {
      isRead
      isReceived
      isFavorite
    }
    sender {
      fullName
      phoneNumber
    }
  }
}
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const UserMessageStatusDocument = gql`
    query userMessageStatus($where: UserMessageStatusWhereInput!) {
  userMessageStatus(where: $where) {
    isReceived
    isRead
    user {
      id
      fullName
      phoneNumber
    }
  }
}
    `;

/**
 * __useUserMessageStatusQuery__
 *
 * To run a query within a React component, call `useUserMessageStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMessageStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMessageStatusQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserMessageStatusQuery(baseOptions: Apollo.QueryHookOptions<UserMessageStatusQuery, UserMessageStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserMessageStatusQuery, UserMessageStatusQueryVariables>(UserMessageStatusDocument, options);
      }
export function useUserMessageStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserMessageStatusQuery, UserMessageStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserMessageStatusQuery, UserMessageStatusQueryVariables>(UserMessageStatusDocument, options);
        }
export type UserMessageStatusQueryHookResult = ReturnType<typeof useUserMessageStatusQuery>;
export type UserMessageStatusLazyQueryHookResult = ReturnType<typeof useUserMessageStatusLazyQuery>;
export type UserMessageStatusQueryResult = Apollo.QueryResult<UserMessageStatusQuery, UserMessageStatusQueryVariables>;
export const UserDocument = gql`
    query user($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    uuid
    email
    username
    fullName
    phoneNumber
    contacts {
      fullName
      contactUserId
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;