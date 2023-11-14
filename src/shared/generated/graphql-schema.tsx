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

export type Message = {
  __typename?: 'Message';
  chatId?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  replyMessageId?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userMessageStatus?: Maybe<UserMessageStatus>;
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
  createGrouptMessage: Message;
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


export type MutationCreateGrouptMessageArgs = {
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
  Contacts: Array<Contact>;
  chats: Array<Chat>;
  messages: Array<Message>;
  user: User;
};


export type QueryChatParticipantArgs = {
  where: ChatParticipantWhereUniqueInput;
};


export type QueryContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>;
  orderBy?: InputMaybe<ContactOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryChatsArgs = {
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

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  contacts?: Maybe<Array<Contact>>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
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
  userId?: Maybe<Scalars['Float']>;
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


export type ChatsQuery = { __typename?: 'Query', chats: Array<{ __typename?: 'Chat', uuid?: string | null, id?: number | null, name?: string | null, createdAt?: any | null, updatedAt?: any | null, isGroup?: boolean | null, messages?: Array<{ __typename?: 'Message', text?: string | null, createdAt?: any | null }> | null, participants?: Array<{ __typename?: 'ChatParticipant', user?: { __typename?: 'User', fullName?: string | null } | null }> | null }> };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, fullName?: string | null, phoneNumber?: number | null } };


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
        fullName
      }
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
export const UserDocument = gql`
    query user($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    uuid
    email
    username
    fullName
    phoneNumber
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