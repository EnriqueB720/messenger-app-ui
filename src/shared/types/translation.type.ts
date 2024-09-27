import { Leaves } from '.';

import { Language } from '@generated';

interface Content {
  title: string;
  description: string;
}

interface Form {
  submit: string
}
interface ProfileForm extends Form {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

interface RegisterForm extends ProfileForm {
  repeatPassword: string;
}

export type Translator = (path: DictionaryLeaves) => string;

export interface LanguageOption {
  label: DictionaryLeaves;
  value: Language;
}

export interface Dictionary {
  global: {
    language: {
      en: string;
      es: string;
    },
    languagePrefix: {
      en: string;
      es: string;
    };
    error: {
      required: string;
      tooShort: string;
      tooLong: string;
      invalidString: string;
      invalidNumber: string;
      invalidEmail: string;
      invalidPassword: string;
      invalidConfirmPassword: string;
      specialCharacterRequired: string;
      numericDigitRequired: string;
      lowerCaseRequired: string;
      upperCaseRequired: string;
      notSpacesAndSpecialCharacters: string;
      defaultError: {
        title: string;
        message: string;
        button: string;
      };
      emailExistsException: {
        title: string;
        message: string;
        button: string;
      };
      usernameExistsException: {
        title: string;
        message: string;
        button: string;
      };
      notAuthorizedException: {
        title: string;
        message: string;
        button: string;
      };
    }
  };
  register: {
    title: string;
    form: RegisterForm;
  };
  forgotPassword: {
    title: string;
    form: {
      email: string;
      submit: string;
      verificationCode: string;
      newPassword: string;
    };
  };
  login: {
    title: string;
    form: {
      submit: string;
      email: string;
      password: string;
    };
    forgotPassword: string;
    verifyAccount: {
      title: string;
      description: string;
      form: {
        verificationCode: string;
        submit: string;
        sendNewCode: string;
      };
    };
  };
  chatSearchBar: {
    placeholderText: string;
  },
  chatHeader:{
    ReferToMySelfAs: string;
  },
  chatInput:{
    placeholderText: string;
  },
  messageOptions:{
    messageInfo: string;
  }
  messageInformation:{
    closeTitle: string;
    readBy: string;
    receivedBy: string;
  }
  chatInformation:{
    groupCloseTitle: string;
    contactCloseTitle: string;
    groupAmountOfParticipants: string;
    members: string;
    exitGroupButton: string;
    blockContactButton: string;
    deleteChatButton: string;
    newMember: string;
  }
  notFound: {
    title: string;
  }
  form: {
    selectPlaceHolder: string;
  }
};

export type GenderDictionary = {
  male: string;
  female: string;
  notSpecified: string;
}

export type ErrorTypeDictionary = {
  notAuthorizedException: string;
  versionMismatchException: string;
  usernameExistsException: string;
  emailExistsException: string;
  userNotConfirmedException: string;
  limitExceededException: string;
  expiredCodeException: string;
  codeMismatchException: string;
  defaultError: string;
}

export type LanguageDictionary = {
  en: string,
  es: string;
}

export type DictionaryLeaves = Leaves<Dictionary, 4>;