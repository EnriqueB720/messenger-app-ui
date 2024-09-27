import { Constants } from '@constants';

import { Dictionary } from '@types';

const { PARAM } = Constants;

const EnglishDictionary: Dictionary = {
  global: {
    language: {
      en: 'English',
      es: 'Spanish'
    },
    languagePrefix: {
      en: 'EN',
      es: 'ES'
    },
    error: {
      required: 'Required',
      tooShort: 'More characters needed',
      tooLong: 'Less characters needed',
      invalidString: 'A text value is required',
      invalidNumber: 'A numeric value is required',
      invalidEmail: 'Email provided is not valid',
      invalidPassword: 'Password provided is not valid',
      invalidConfirmPassword: 'The passwords are not the same',
      specialCharacterRequired: 'Special character required, like: (!, #, $, %, &, *)',
      numericDigitRequired: 'Digit character required, like: (0, 1, 2, 3, 4, 5, 7, 8, 9)',
      lowerCaseRequired: 'Lower case needed',
      upperCaseRequired: 'Upper case needed',
      notSpacesAndSpecialCharacters: 'Not white spaces and special character supported',
      defaultError: {
        title: 'Error',
        message: 'An error has occurred',
        button: 'Try again'
      },
      emailExistsException: {
        title: 'That email is already taken',
        message: 'email already taken',
        button: 'Try again'
      },
      usernameExistsException: {
        title: 'That username is already taken',
        message: 'username already taken',
        button: 'Try again'
      },
      notAuthorizedException: {
        title: 'Invalid Credentials',
        message: 'The email or password you provided is incorrect',
        button: 'Try again'
      }
    }
  },
  register: {
    title: 'Create account',
    form: {
      submit: 'Get started',
      email: 'Email',
      firstName: 'First name',
      lastName: 'Last name',
      username: 'Username',
      password: 'Password',
      repeatPassword: 'Repeat password'
    },
  },
  forgotPassword: {
    title: 'Reset password',
    form: {
      email: 'Email',
      submit: 'Reset password',
      verificationCode: 'Verification code',
      newPassword: 'New password',
    }
  },
  login: {
    title: 'Log in',
    form: {
      submit: 'Log in',
      email: 'Email',
      password: 'Password',
    },
    forgotPassword: 'Forgot password?',
    verifyAccount: {
      title: 'Verify Account',
      description: 'Please check your email and validate your account',
      form: {
        verificationCode: 'verification code',
        submit: 'Verify Account',
        sendNewCode: 'Send me a new code!'
      }
    }
  },
  notFound: {
    title: 'Oops...',
  },
  chatSearchBar: {
    placeholderText: 'Search in Chats'
  },
  chatHeader: {
    ReferToMySelfAs: 'Me'
  },
  chatInput: {
    placeholderText: 'Type a message...'
  },
  messageOptions: {
    messageInfo: 'Message Info.'
  },
  messageInformation: {
    closeTitle: 'Message Information.',
    readBy: 'Read by',
    receivedBy: 'Received by'
  },
  chatInformation: {
    groupCloseTitle: 'Group Information.',
    contactCloseTitle: 'Contact Information.',
    groupAmountOfParticipants: 'Group',
    members: 'members',
    exitGroupButton: 'Exit group',
    blockContactButton: 'Block',
    deleteChatButton: 'Delete chat',
    newMember: 'Add member'
  },
  form:{
    selectPlaceHolder: 'Select one option'
  }
}

export default EnglishDictionary