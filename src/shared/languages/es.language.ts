import { Constants } from '@constants';

import { Dictionary } from '@types';

const { PARAM } = Constants;

const SpanishDictionary: Dictionary = {
  global: {
    language: {
      en: 'Inglés',
      es: 'Español'
    },
    languagePrefix: {
      en: 'EN',
      es: 'ES'
    },
    error: {
      required: 'Requerido',
      tooShort: 'Se necesitan más caracteres',
      tooLong: 'Se necesitan menos caracteres',
      invalidString: 'Se necesita un valor de tipo texto',
      invalidNumber: 'Se necesita un valor de tipo numérico',
      invalidEmail: 'El correo electrónico proporcionado no es valido',
      invalidPassword: 'La contraseña no es valida',
      invalidConfirmPassword: 'Las contraseñas no coinciden',
      specialCharacterRequired: 'Se necesita un carácter especial como: (!, #, $, %, &, *)',
      numericDigitRequired: 'Se necesita un carácter numérico como: (0, 1, 2, 3, 4, 5, 7, 8, 9)',
      lowerCaseRequired: 'Se necesita un carácter en minúscula',
      upperCaseRequired: 'Se necesita un carácter en mayúscula',
      notSpacesAndSpecialCharacters: 'No se permite espacios ni caracteres especiales',
      defaultError: {
        title: 'Error',
        message: 'Ha ocurrido un error, por favor intente nuevamente',
        button: 'Intentar de nuevo'
      },
      emailExistsException: {
        title: 'Correo electrónico ya existe',
        message: 'Correo electrónico ya existe',
        button: 'Ok'
      },
      usernameExistsException: {
        title: 'Nombre de usuario ya existe',
        message: 'Nombre de usuario ya existe',
        button: 'Ok'
      },
      notAuthorizedException: {
        title: 'Credenciales erroneas',
        message: 'El correo electrónico o la contraseña son inválidos',
        button: 'Intentar de nuevo'
      }
    }
  },
  register: {
    title: 'Crear cuenta',
    form: {
      submit: 'Empezar',
      email: 'Correo Eléctronico',
      username: 'Nombre de usuario',
      firstName: 'Nombre',
      lastName: 'Apellidos',
      phoneNumber: 'Telefono',
      password: 'Contraseña',
      repeatPassword: 'Repetir contraseña'
    },
    alreadyAnAccount: 'Ya tienes una cuenta? Inicia sesión'
  },
  forgotPassword: {
    title: 'Resetear Contraseña',
    form: {
      email: 'Email',
      submit: 'Resetear Contraseña',
      verificationCode: 'Código de Verificación',
      newPassword: 'Nueva Contraseña',
    }
  },
  login: {
    title: 'Inicio de sesión',
    form: {
      submit: 'Ingresar',
      email: 'Correo Electrónico',
      password: 'Contraseña',
    },
    forgotPassword: '¿Olvidó tu contraseña?',
    verifyAccount: {
      title: 'Verificar Contraseña',
      description: 'Por favor, ingrese el código de verificación que se le ha enviado a su correo electrónico',
      form: {
        verificationCode: 'código de verificación',
        submit: 'Verificar Contraseña',
        sendNewCode: 'Enviar código nuevo',
      }
    },
    noAccount: 'Crear una cuenta'
  },
  notFound: {
    title: 'Oops...'
  },
  chatSearchBar: {
    placeholderText: 'Busca en conversaciones'
  },
  chatHeader: {
    ReferToMySelfAs: 'Yo'
  },
  chatInput: {
    placeholderText: 'Escribe un mensaje...'
  },
  messageOptions: {
    messageInfo: 'Info. del mensaje'
  },
  messageInformation: {
    closeTitle: 'Informacion del mensaje',
    readBy: 'Leido por',
    receivedBy: 'Recibido por'
  },
  chatInformation: {
    groupCloseTitle: 'Informacion del grupo',
    contactCloseTitle: 'Informacion del contacto',
    groupAmountOfParticipants: 'Grupo',
    members: 'miembros',
    exitGroupButton: 'Salir del grupo',
    blockContactButton: 'Bloquear',
    deleteChatButton: 'Eliminar la conversacion',
    newMember: 'Agregar miembro'
  },
  form:{
    selectPlaceHolder: 'Seleccione una opcion'
  },
  AppCreatorProfile:{
    link: 'Enlace al perfil del creador',
    referAs: 'Creador del App'
  },
  addContactForm:{
    formTitle: "Agregar nuevo contacto",
    lastName: "Apellido(s)",
    firstName: "Nombre",
    phoneNumber: "Numero de telefono",
    submitButton: "Añadir nuevo contacto",
    confirmationMessage: "Tu contacto se ha creado con exito!",
    errorMessage: "Oops! El contacto no existe en la plataforma."
  },
  logoutMessage: 'Cerrar Sesion'
}

export default SpanishDictionary