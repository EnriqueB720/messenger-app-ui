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
    gender: {
      male: 'Male',
      female: 'Female',
      notSpecified: 'No Specified'
    },
    time: {
      day: 'Day',
      days: 'Days'
    },
    weekDay: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    weekDayPrefix: {
      monday: 'Mo',
      tuesday: 'Tu',
      wednesday: 'We',
      thursday: 'Th',
      friday: 'Fr',
      saturday: 'Sa',
      sunday: 'Su'
    },
    muscleGroup: {
      calves: 'Calves',
      hamstrings: 'Hamstrings',
      quadriceps: 'Quadriceps',
      glutes: 'Glutes',
      biceps: 'Biceps',
      triceps: 'Triceps',
      forearms: 'Forearms',
      trapezius: 'Trapezius',
      latissimus: 'Latissimus',
      chest: 'Chest',
      back: 'Back',
      arms: 'Arms',
      abs: 'Abs',
      legs: 'Legs',
      shoulders: 'Shoulders'
    },
    announcements: {
      comingSoon: 'Coming Soon'
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
      versionMismatchException: {
        title: 'Please Update the app',
        message: 'A newer required version of the app found',
        button: 'Ok'
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
      },
      userNotConfirmedException:{
        title: 'User not confirmed',
        message: 'Please check your email and validate your account',
        button: 'Ok'
      },
      limitExceededException: {
        title: 'Limit exceeded',
        message: 'You have reached the limit of attempts',
        button: 'Try again later'
      },
      expiredCodeException: {
        title: 'Expired code',
        message: 'The code you provided has expired',
        button: 'Try again'
      },
      codeMismatchException: {
        title: 'Code mismatch',
        message: 'The code you provided is not correct',
        button: 'Try again'
      }
    }
  },
  launch: {
    title: 'Let\'s workout!',
    subtitle: 'You can find all you need to achieve your fitness goals',
    login: 'Sign in',
    register: 'Create account',
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
    agreement: {
      criteria: '* I agree to 2Train\'s',
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
      and: 'and'
    },
    collectData: `* To build my personalized programs, I consent 2Train to collect and process health data`
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
    title: 'Log in to 2Train',
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
  home: {
    title: 'Home',
    feed: {
      viewAll: 'View all',
      programs: 'Programs',
      coaches: 'Coaches',
      articles: 'Articles'
    }
  },
  profile: {
    title: 'Profile',
    unlock: 'Unlock 2Train Pro',
    invite: 'Invite your friends to join',
    stats: {
      workouts: 'Workouts',
      plans: 'Plans',
      bodyMeasures: 'Measures'
    },
    general: {
      title: 'General',
      labels: {
        username: 'Username',
        fullName: 'Full name',
        email: 'Email',
        gender: 'Gender',
      }
    },
    account: {
      title: 'Account',
      labels: {
        language: 'Language',
        notifications: 'Notifications',
        changePassword: 'Change password',
        logout: 'Log out'
      }
    },
    form: {
      submit: 'Save',
      firstName: 'First name',
      lastName: 'Last name',
      password: 'Password',
      newPassword: 'New password',
      repeatPassword: 'Repeat password'
    }
  },
  train: {
    title: 'Train',
    plan: {
      progress: 'Progress',
      routine: 'Routine',
      nutritionalPlan: 'Nutrition',
      bodyMeasures: 'Body Measures',
      workouts: 'Workouts',
      inProgressRoutine: 'Your coach is currently working on it',
      progressDays: `Day ${PARAM} of ${PARAM}`,
      coaches: {
        title: 'Coaches',
        invite: 'Invite'
      },
      areas: {
        general: 'General',
        nutrition: 'Nutrition'
      },
      planPending: {
        title: 'Your plan is pending',
        description: 'Your plan has not started yet.',
        action: 'Ok'
      },
      noPlan: {
        title: 'No Plan',
        description: 'You need to have an active plan to get enable this functionality. Contact your coach for request a plan invitation.',
        action: 'Find Coaches'
      }
    },
    routineDay: {
      start: 'Start',
      finish: 'Finish',
      summary: `This workout routine is based on ${PARAM} different exercises that are focused on the following set of muscles:`,
      discardChanges: {
        title: 'Discard changes?',
        description: 'You have unsaved changes. Do you want to save them by finishing?',
        primaryAction: 'Finish',
        secondaryAction: 'Exit',
      },
      pendingWorkouts: {
        title: 'Pending workouts',
        description: 'There are still some pending workouts. Do you want to finish now?',
        primaryAction: 'Finish',
        secondaryAction: 'Exit',
      },
      emptyWorkouts: {
        title: 'No changes',
        description: 'You have not complete any workout yet. Do you want to continue tracking your progress?',
        primaryAction: 'Continue',
        secondaryAction: 'Exit',
      }
    },
    exercisePreview: {
      involvedMuscles: 'Involved muscles'
    },
    tracker: {
      timer: {
        breakTimer: 'Break time'
      },
      workoutForm: {
        sets: 'Sets',
        reps: 'Reps',
        timer: 'Secs',
        weight: 'Weight',
        breakTimer: 'Break',
        submit: 'Save'
      }
    },
    feedback: {
      congrats: 'You rock star, you!',
      completed: 'YOU COMPLETED',
      workouts: `${PARAM} workouts`,
      pendingWorkouts: `Only ${PARAM} more workouts until you reach this week\'s goal!! You got this.`,
      difficulty: {
        question: 'How easy was it?',
        firstAnswer: 'EASY',
        secondAnswer: 'OK',
        thirdAnswer: 'HARD'
      },
      enjoyment: {
        question: 'Did you enjoy it?',
        firstAnswer: 'NOT',
        secondAnswer: 'YES',
        thirdAnswer: 'LOVED IT'
      },
      submit: 'Submit'
    }
  },
  coach: {
    readMore: 'Read more',
    information: {
      title: 'Information',
      email: 'Email',
      phone: 'Phone',
      yearsOfExperience: 'Experience'
    }
  },
  article: {
    author: {
      statement: 'WRITTEN BY'
    }
  },
  salePlan: {
    coach: 'Coach',
    apply: 'Apply',
    status: {
      available: 'Available',
      unavailable: 'Unavailable'
    },
    info: {
      price: 'Price',
      duration: 'Duration',
      nutritionalPlan: 'Nutritional Plan',
      workoutRoutine: 'Workout Routine'
    }
  },
  notFound: {
    title: 'Oops...',
  },
  modal: {
    termsOfService: {
      title: 'Terms of Service',
      intro: 'The Terms of Service are effective on January 01, 2022. \n The Service is owned or controlled by 2Train. These Terms of Service affect your legal rights and obligations. If you do not agree to be bound by all of these Terms of Service, do not access or use the Service. For the purposes of these Terms Of Service unless otherwise noted, all references to 2Train and 2train.net. \n 2Train has the sole right at any time and without prior notice to revise these Terms. 2Train will post changes on the website/app and it is your responsibility to review these Terms and any modifications. \n 2Train has the right at any time and without prior notice to terminate some or all of 2Train services, any feature or portion thereof, or any products or services offered, and to terminate your right to access or use 2Train services or any feature or portion thereof. \n By signing up for 2Train, you hereby assume all risks of participating in 2Train programs, and release 2Train and all 2Train personal trainers from liability. \n You are verifying that you are physically fit enough and have sufficiently prepared for the participation in 2Train programs, and have not been advised not to participate by a qualified medical professional. You certify that there are no health-related reasons or problems which preclude your participation in these programs. \n You WAIVE, RELEASE, AND DISCHARGE from any and all liability, including but not limited to, liability arising from the negligence or fault of the entities or persons released, for death, disability, personal injury, or actions of any kind which may hereafter occur to you including your traveling to and from this activity, THE FOLLOWING ENTITIES OR PERSONS: 2Train, and all 2Train personal trainers. \n You INDEMNIFY, HOLD HARMLESS, AND PROMISE NOT TO SUE the entities or persons mentioned in the above paragraph from any and all claims made as a result of participation in these programs, whether caused by the negligence of release or otherwise. \n',
      personalTrainerTerms: {
        title: 'Personal Trainer Terms',
        description: '1. Age: By signing up for 2Train as a personal trainer/coach, you are confirming you are at least 18 years old. \n 2. Services: The Personal Trainer is responsible for obtaining and maintaining any required certiﬁcation(s). If the Personal Trainer certiﬁcation status is misrepresented, this agreement can be cancelled by 2Train. The Personal Trainer is responsible for the submission of evaluations, and any other program completion required by 2Train. \n 3. Fees and Remuneration: As a personal trainer, you are acknowledging that 2Train, including payment and processing fees, will receive a minimum of 10% from every program sold for our costs in development, marketing, administration, sales, customer service, and more unless otherwise discussed with 2Train. \n 4. Intellectual Property Agreement: The Personal Trainer agrees that the programs provided to 2Train were created solely by you and aren’t the intellectual property of another trainer. You maintain ownership in these ﬁtness programs if they were created by you and are simply giving 2Train. full permission to host, sell, promote, and distribute these programs. \n 5. Independent Contractor: Nothing in this agreement shall, in any way, be construed to constitute the Personal Trainer as an agent, employee, or representative of 2Train. 2Train is not responsible for withholding or paying federal, state, or local income tax, FICA, unemployment, or other similar taxes nor liability, workman’s compensation or other similar insurance. You acknowledge that 2Train is not your employer but simply a host for you to sell your ﬁtness programs. \n 6. Controlling Law: This agreement shall be governed by the laws of the state listed as the address of 2Train. Any disputes arising out of this agreement shall be settled in the state and county of WeStrive’s address, as stated in this agreement. \n 7. General Provisions: \n a)  Notices. Any notices required or permitted to be given under this Agreement shall be sufﬁcient, if in writing and personally delivered, Faxed, or sent by certiﬁed mail, return receipt requested, to the addresses listed above, or to such other address as either party may designate to the other party in the manner above provided. \n b)  Entire Agreement. This agreement, including the exhibits hereto, contains the entire agreement and understanding between the parties as to the subject matter of this agreement. No prior or contemporaneous obligations, conditions, warranties, or representations shall create binding obligations upon either party except for those expressly set forth herein. This agreement may not be changed or altered except by a written agreement signed by both parties. \n'
      },
      basicTerms: {
        title: 'Basic Terms',
        description: '1. The Terms form a legally binding agreement between you and 2Train. Please take the time to read them carefully. If you are under age 18, you may only use 2Train with the consent of your parent or legal guardian. Please be sure your parent or legal guardian has reviewed and discussed these Terms with you. \n 2. You must be at least 13 years old to use 2Train. \n 3. You may not post violent, nude, partially nude, discriminatory, unlawful, infringing, hateful, pornographic or sexually suggestive photos or other content via the Service. \n 4. You are responsible for any activity that occurs through your account and you agree you will not sell, transfer, license or assign your account, followers, username, or any account rights. With the exception of people or businesses that are expressly authorized to create accounts on behalf of their employers or clients, 2Train prohibits the creation of and you agree that you will not create an account for anyone other than yourself. You also represent that all information you provide or provided to 2Train upon registration and at all other times will be true, accurate, current and complete and you agree to update your information as necessary to maintain its truth and accuracy. \n 5. You agree that you will not solicit, collect or use the login credentials of other 2Train users. \n 6. You are responsible for keeping your password secret and secure. \n 7. You must not defame, stalk, bully, abuse, harass, threaten, impersonate or intimidate people or entities and you must not post private or confidential information via the Service, including, without limitation, your or any other person\'s credit card information, social security or alternate national identity numbers, non-public phone numbers or non-public email addresses. \n 8. You may not use the Service for any illegal or unauthorized purpose. You agree to comply with all laws, rules and regulations (for example, federal, state, local and provincial) applicable to your use of the Service and your Content (defined below), including but not limited to, copyright laws. \n 9. You are solely responsible for your conduct and any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links and other content or materials (collectively, "Content") that you submit, post or display on or via the Service. \n 10. You must not change, modify, adapt or alter the Service or change, modify or alter another website so as to falsely imply that it is associated with the Service or 2Train. \n 11. You must not access WeStrive’s private API. \n 12. You must not create or submit unwanted email, comments, likes or other forms of commercial or harassing communications (a/k/a "spam") to any users. \n 13. You must not use domain names or web URLs in your username without prior written consent from 2Train. \n 14. You must not interfere or disrupt the Service or servers or networks connected to the Service, including by transmitting any worms, viruses, spyware, malware or any other code of a destructive or disruptive nature. You may not inject content or code or otherwise alter or interfere with the way any 2Train page is rendered or displayed in a user\'s browser or device. \n 15. You must not create accounts with the Service through unauthorized means, including but not limited to, by using an automated device, script, bot, spider, crawler or scraper. \n 16. You must not attempt to restrict another user from using or enjoying the Service and you must not encourage or facilitate violations of these Terms of Service or any other 2Train terms. \n 17. Violation of these Terms of Service may, in WeStrive’s sole discretion, result in termination of your 2Train account. You understand and agree that 2Train cannot and will not be responsible for the Content posted on the Service and you use the Service at your own risk. If you violate the letter or spirit of these Terms of Service, or otherwise create risk or possible legal exposure for 2Train, we can stop providing all or part of the Service to you. \n'
      },
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      intro: 'Protecting your private information is our priority. This Statement of Privacy applies to 2train.net and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to 2Train and 2train.net. The 2Train website is a 2Train Fitness App site. By using the 2Train website or mobile app, you consent to the data practices described in this statement.',
      collectPersonalInfo: {
        title: 'Collection of your Personal Information',
        description: 'In order to better provide you with products and services offered on our Site, 2Train may collect personally identifiable information, such as your: First and Last Name, E-mail Address. 2Train may also collect anonymous demographic information, which is not unique to you, such as your: Age and Gender. Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through 2Train\'s public message boards, this information may be collected and used by others. We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.'
      },
      useOfPersonaInfo: {
        title: 'Use of your Personal Information',
        description: 'We do not collect any personal information about you unless you voluntarily provide it to us. 2Train collects and uses your personal information to operate its website(s) and deliver the services you have requested. 2Train may also use your personally identifiable information to inform you of other products or services available from 2Train and its affiliates.'
      },
      sharingPersonalInfo: {
        title: 'Sharing Information with Third Parties',
        description: '2Train does not sell, rent, or lease its customer lists to third parties. 2Train may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to 2Train, and they are required to maintain the confidentiality of your information. 2Train may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on 2Train or the site; (b) protect and defend the rights or property of 2Train; and/or (c) act under exigent circumstances to protect the personal safety of users of 2Train, or the public.'
      },
      userTrackingBehavior: {
        title: 'Tracking User Behavior',
        description: '2Train may keep track of the websites and pages our users visit within 2Train, in order to determine what 2Train services are the most popular. This data is used to deliver customized content and advertising within 2Train to customers whose behavior indicates that they are interested in a particular subject area.'
      },
      autoCollectInfo: {
        title: 'Automatically Collected Information',
        description: 'Information about your computer hardware and software may be automatically collected by 2Train. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the 2Train website.'
      },
      links: {
        title: 'Links',
        description: 'This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.'
      },
      childrenUnderAge: {
        title: 'Children Under Thirteen',
        description: '2Train does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.'
      },
      mailCommunication: {
        title: 'E-mail Communications',
        description: 'From time to time, 2Train may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication.'
      },
      statementChanges: {
        title: 'Changes to this Statement',
        description: '2Train reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.'
      },
      contactInfo: {
        title: 'Contact Information',
        description: '2Train welcomes your questions or comments regarding this Statement of Privacy. If you believe that 2Train has not adhered to this Statement, please contact 2Train at: Email Address: help@2train.net Effective as of February 01, 2022.'
      },
    },
  }
}

export default EnglishDictionary