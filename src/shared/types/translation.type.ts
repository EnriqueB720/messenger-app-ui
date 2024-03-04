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
    gender: GenderDictionary,
    time: {
      day: string;
      days: string;
    },
    weekDay: WeekDayPrefixDictionary, 
    weekDayPrefix: WeekDayPrefixDictionary,
    muscleGroup: MuscleGroupDictionary,
    announcements: {
      comingSoon: string;
    },
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
      versionMismatchException: {
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
      userNotConfirmedException: {
        title: string;
        message: string;
        button: string;
      };
      limitExceededException: {
        title: string;
        message: string;
        button: string;
      };
      expiredCodeException: {
        title: string;
        message: string;
        button: string;
      };
      codeMismatchException: {
        title: string;
        message: string;
        button: string;
      };
    }
  };
  launch: {
    title: string;
    subtitle: string;
    login: string;
    register: string;
  };
  register: {
    title: string;
    form: RegisterForm;
    agreement: {
      criteria: string;
      termsOfService: string;
      privacyPolicy: string;
      and: string;
    };
    collectData: string;
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
  home: {
    title: string;
    feed: {
      viewAll: string;
      programs: string;
      coaches: string;
      articles: string;
    }
  };
  profile: {
    title: string;
    unlock: string;
    invite: string;
    stats: {
      workouts: string;
      plans: string;
      bodyMeasures: string;
    },
    general: {
      title: string;
      labels: {
        username: string;
        fullName: string;
        email: string;
        gender: string;
      }
    }
    account: {
      title: string;
      labels: {
        language: string;
        notifications: string;
        changePassword: string;
        logout: string;
      }
    },
    form: {
      submit: string;
      firstName: string;
      lastName: string;
      password: string;
      newPassword: string;
      repeatPassword: string;
    }
  };
  train: {
    title: string;
    plan: {
      progress: string;
      routine: string;
      nutritionalPlan: string;
      bodyMeasures: string;
      workouts: string;
      inProgressRoutine: string;
      progressDays: string;
      coaches: {
        title: string;
        invite: string;
      };
      areas: {
        general: string;
        nutrition: string;
      };
      noPlan: {
        title: string;
        description: string;
        action: string;
      };
      planPending: {
        title: string;
        description: string;
        action: string;
      };
    };
    routineDay: {
      start: string;
      finish: string;
      summary: string;
      discardChanges: {
        title: string;
        description: string;
        primaryAction: string;
        secondaryAction: string;
      };
      pendingWorkouts: {
        title: string;
        description: string;
        primaryAction: string;
        secondaryAction: string;
      },
      emptyWorkouts: {
        title: string;
        description: string;
        primaryAction: string;
        secondaryAction: string;
      }
    };
    exercisePreview: {
      involvedMuscles: string;
    };
    tracker: {
      timer: {
        breakTimer: string;
      },
      workoutForm: {
        sets: string;
        reps: string;
        timer: string;
        weight: string;
        breakTimer: string;
        submit: string;
      }
    },
    feedback: {
      congrats: string;
      completed: string;
      workouts: string;
      pendingWorkouts: string;
      difficulty: {
        question: string;
        firstAnswer: string;
        secondAnswer: string;
        thirdAnswer: string;
      }
      enjoyment: {
        question: string;
        firstAnswer: string;
        secondAnswer: string;
        thirdAnswer: string;
      },
      submit: string;
    };
  },
  coach: {
    readMore: string;
    information: {
      title: string;
      email: string;
      phone: string;
      yearsOfExperience: string;
    }
  },
  article: {
    author: {
      statement: string;
    }
  },
  salePlan: {
    coach: string;
    apply: string;
    status: {
      available: string;
      unavailable: string;
    },
    info: {
      price: string;
      duration: string;
      nutritionalPlan: string;
      workoutRoutine: string;
    }
  },
  modal: {
    termsOfService: TermsOfServiceContent;
    privacyPolicy: PrivacyPolicyContent;
  }
  notFound: {
    title: string;
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

export interface WeekDayPrefixDictionary {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface MuscleGroupDictionary {
  calves: string;
  hamstrings: string;
  quadriceps: string;
  glutes: string;
  biceps: string;
  triceps: string;
  forearms: string;
  trapezius: string;
  latissimus: string;
  chest: string;
  back: string;
  arms: string;
  abs: string;
  legs: string;
  shoulders: string;
}

export interface TermsOfServiceContent {
  title: string;
  intro: string;
  personalTrainerTerms: Content;
  basicTerms: Content;
}

export interface PrivacyPolicyContent {
  title: string;
  intro: string;
  collectPersonalInfo: Content;
  useOfPersonaInfo: Content;
  sharingPersonalInfo: Content;
  userTrackingBehavior: Content;
  autoCollectInfo: Content;
  links: Content;
  childrenUnderAge: Content;
  mailCommunication: Content;
  statementChanges: Content;
  contactInfo: Content;
}

export type DictionaryLeaves = Leaves<Dictionary, 4>;