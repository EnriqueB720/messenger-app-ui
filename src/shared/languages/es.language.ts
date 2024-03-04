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
    gender: {
      male: 'Masculino',
      female: 'Femenino',
      notSpecified: 'No especificado'
    },
    time: {
      day: 'Día',
      days: 'Días'
    },
    weekDay: {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo'
    },
    weekDayPrefix: {
      monday: 'Lu',
      tuesday: 'Ma',
      wednesday: 'Mi',
      thursday: 'Ju',
      friday: 'Vi',
      saturday: 'Sa',
      sunday: 'Do'
    },
    muscleGroup: {
      calves: 'Pantorrillas',
      hamstrings: 'Isquiotibiales',
      quadriceps: 'Cuadríceps',
      glutes: 'Glúteos',
      biceps: 'Bíceps',
      triceps: 'Tríceps',
      forearms: 'Antebrazos',
      trapezius: 'Trapecio',
      latissimus: 'Latísimo',
      chest: 'Pecho',
      back: 'Espalda',
      arms: 'Brazos',
      abs: 'Abdominales',
      legs: 'Piernas',
      shoulders: 'Espalda'
    },
    announcements: {
      comingSoon: 'Próximamente'
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
      versionMismatchException: {
        title: 'Por favor actualize el app',
        message: 'Encontramos una actualizacion necesaria',
        button: 'Ok'
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
      },
      userNotConfirmedException:{
        title: 'Cuenta no verificada',
        message: 'Por favor, revise su correo electrónico para verificar su cuenta',
        button: 'Ok'
      },
      limitExceededException: {
        title: 'Límite excedido',
        message: 'Has excedido el número de intentos permitidos. Por favor, intente de nuevo más tarde',
        button: 'Ok'
      },
      expiredCodeException: {
        title: 'Código expirado',
        message: 'El código de verificación ha expirado. Por favor, intente de nuevo',
        button: 'Ok'
      },
      codeMismatchException: {
        title: 'Código incorrecto',
        message: 'El código de verificación es incorrecto. Por favor, intente de nuevo',
        button: 'Ok'
      }
    }
  },
  launch: {
    title: '¡Vamos a entrenar!',
    subtitle: 'Encuentra todo lo que necesitas para lograr tus metas fitness',
    login: 'Ingresar',
    register: 'Crear cuenta',
  },
  register: {
    title: 'Crear cuenta',
    form: {
      submit: 'Empezar',
      email: 'Correo Eléctronico',
      username: 'Nombre de usuario',
      firstName: 'Nombre',
      lastName: 'Apellido',
      password: 'Contraseña',
      repeatPassword: 'Repetir contraseña'
    },
    agreement: {
      criteria: '* Estoy de acuerdo con los',
      termsOfService: 'Términos de Servicio',
      privacyPolicy: 'Políticas de Privacidad',
      and: 'y'
    },
    collectData: '* Para la personalización de mis programas, yo consiento a 2Train para colectar y procesar información de salud'
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
    title: 'Ingresar a 2Train',
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
    }
  },
  home: {
    title: 'Inicio',
    feed: {
      viewAll: 'Ver todos',
      programs: 'Programas',
      coaches: 'Instructores',
      articles: 'Artículos'
    }
  },
  profile: {
    title: 'Perfil',
    unlock: 'Adquiere 2Train Pro',
    invite: 'Invitar a tus amigos a unirse',
    stats: {
      workouts: 'Entrenamientos',
      plans: 'Planes',
      bodyMeasures: 'Mediciones'
    },
    general: {
      title: 'General',
      labels: {
        username: 'Usuario',
        fullName: 'Nombre completo',
        email: 'Correo Electrónico',
        gender: 'Género',
      }
    },
    account: {
      title: 'Cuenta',
      labels: {
        language: 'Idioma',
        notifications: 'Notificaciones',
        changePassword: 'Cambiar contraseña',
        logout: 'Cerrar sesión'
      }
    },
    form: {
      submit: 'Guardar',
      firstName: 'Primer nombre',
      lastName: 'Apellido',
      password: 'Contraseña',
      newPassword: 'Contraseña nueva',
      repeatPassword: 'Repetir contraseña',
    }
  },
  train: {
    title: 'Entrenar',
    plan: {
      progress: 'Progreso',
      routine: 'Rutina',
      nutritionalPlan: 'Nutrición',
      bodyMeasures: 'Mediciones',
      workouts: 'Entrenamientos',
      inProgressRoutine: 'Su instructor(a) esta trabajando en ello',
      progressDays: `Día ${PARAM} de ${PARAM}`,
      coaches: {
        title: 'Instructores',
        invite: 'Invitar otros instructores'
      },
      areas: {
        general: 'General',
        nutrition: 'Nutrición'
      },
      planPending: {
        title: 'Your plan is pending',
        description: 'Your plan has not started yet.',
        action: 'Ok'
      },
      noPlan: {
        title: 'Sin Plan',
        description: 'Necesitas un plan activo para habilitar esta funcionalidad. Contacte a su instructor para solicitar una invitación a un plan.',
        action: 'Buscar Instructores'
      }
    },
    routineDay: {
      start: 'Empezar',
      finish: 'Finalizar',
      summary: `Esta rutina de entrenamiento esta compuesta por ${PARAM} diferentes ejercicios que se enfocan en las siguientes zonas músculares:`,
      discardChanges: {
        title: '¿Descartar cambios?',
        description: 'Hay cambios sin guardar. ¿Quieres guardarlos finalizando el proceso?',
        primaryAction: 'Finalizar',
        secondaryAction: 'Salir',
      },
      pendingWorkouts: {
        title: 'Ejercicios pendientes',
        description: 'Aún hay algunos ejercios sin completar. ¿Estás seguro de finalizar el proceso?',
        primaryAction: 'Finalizar',
        secondaryAction: 'Salir',
      },
      emptyWorkouts: {
        title: 'Sin cambios',
        description: 'No has completado ningún ejercios aún. ¿Quieres continuar con el seguimiento del entrenamiento?',
        primaryAction: 'Continuar',
        secondaryAction: 'Salir',
      }
    },
    exercisePreview: {
      involvedMuscles: 'Músculos relacionados'
    },
    tracker: {
      timer: {
        breakTimer: 'Tiempo de Decanso'
      },
      workoutForm: {
        sets: 'Sets',
        reps: 'Reps',
        timer: 'Segs',
        weight: 'Peso',
        breakTimer: 'Decanso',
        submit: 'Guardar'
      }
    },
    feedback: {
      congrats: 'Excelente!',
      completed: 'COMPLETASTE',
      workouts: `${PARAM} entrenamientos`,
      pendingWorkouts: `Solo falta ${PARAM} entrenamientos más antes de completar el logro semanal!! Tu puedes.`,
      difficulty: {
        question: '¿Qué tan fácil fue?',
        firstAnswer: 'FACIL',
        secondAnswer: 'OK',
        thirdAnswer: 'DIFICIL'
      },
      enjoyment: {
        question: '¿Lo disfrutaste?',
        firstAnswer: 'NO',
        secondAnswer: 'SI',
        thirdAnswer: 'ME ENCANTO'
      },
      submit: 'Enviar'
    }
  },
  coach: {
    readMore: 'Leer más',
    information: {
      title:  'Información',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      yearsOfExperience: 'Experiencia'
    }
  },
  article: {
    author: {
      statement: 'ESCRITO POR'
    }
  },
  salePlan: {
    coach: 'Instructor',
    apply: 'Solicitar',
    status: {
      available: 'Disponible',
      unavailable: 'No disponible'
    },
    info: {
      price: 'Precio',
      duration: 'Duración',
      nutritionalPlan: 'Plan nutricional',
      workoutRoutine: 'Rutina de ejercicios'
    }
  },
  notFound: {
    title: 'Oops...'
  },
  modal: {
    termsOfService: {
      title: 'Términos de servicio',
      intro: 'Los Términos de servicio entran en vigencia el 1 de enero de 2022. \n El Servicio es propiedad o está controlado por 2Train. Estos Términos de servicio afectan sus derechos y obligaciones legales. Si no acepta estar sujeto a todos estos Términos de servicio, no acceda ni use el Servicio. A los efectos de estos Términos de servicio, a menos que se indique lo contrario, todas las referencias a 2Train y 2train.net. \n 2Train tiene el derecho exclusivo en cualquier momento y sin previo aviso de revisar estos Términos. 2Train publicará los cambios en el sitio web/aplicación y es su responsabilidad revisar estos Términos y cualquier modificación. \n 2Train tiene el derecho, en cualquier momento y sin previo aviso, de rescindir algunos o todos los servicios de 2Train, cualquier función o parte de los mismos, o cualquier producto o servicio ofrecido, y de rescindir su derecho a acceder o utilizar los servicios de 2Train o cualquier función o parte del mismo. \n Al registrarse en 2Train, usted asume todos los riesgos de participar en los programas de 2Train y libera a 2Train y a todos los entrenadores personales de 2Train de toda responsabilidad. \n Está verificando que está en buena forma física y que se ha preparado lo suficiente para participar en los programas de 2Train, y que un profesional médico calificado no le ha aconsejado que no participe. Usted certifica que no existen razones o problemas relacionados con la salud que impidan su participación en estos programas. \n Usted RENUNCIA, LIBERA Y LIBERA de toda responsabilidad, incluida, entre otras, la responsabilidad que surja de la negligencia o culpa de las entidades o personas liberadas, por muerte, discapacidad, lesiones personales o acciones de cualquier tipo que puedan de ahora en adelante, incluido su viaje hacia y desde esta actividad, LAS SIGUIENTES ENTIDADES O PERSONAS: 2Train y todos los entrenadores personales de 2Train. \n Usted INDEMNIZA, EXONERA DE RESPONSABILIDAD Y PROMETE NO DEMANDAR a las entidades o personas mencionadas en el párrafo anterior por cualquier y todo reclamo realizado como resultado de la participación en estos programas, ya sea causado por la negligencia de liberación o de otra manera.',
      personalTrainerTerms: {
        title: 'Términos de entrenador personal',
        description: '1. Edad: Al registrarte en 2Train como entrenador/entrenador personal, estás confirmando que tienes al menos 18 años. \n 2. Servicios: el Entrenador personal es responsable de obtener y mantener las certificaciones requeridas. Si se tergiversa el estado de la certiﬁcación de entrenador personal, 2Train puede cancelar este acuerdo. El Entrenador Personal es responsable de la presentación de evaluaciones y cualquier otra finalización del programa requerida por 2Train. \n 3. Tarifas y remuneración: como entrenador personal, usted reconoce que 2Train, incluidos los pagos y las tarifas de procesamiento, recibirá un mínimo del 10 % de cada programa vendido por nuestros costos de desarrollo, marketing, administración, ventas y servicio al cliente. , y más a menos que se discuta lo contrario con 2Train. \n 4. Acuerdo de propiedad intelectual: el entrenador personal acepta que los programas proporcionados a 2Train fueron creados únicamente por usted y no son propiedad intelectual de otro entrenador. Usted mantiene la propiedad de estos programas de acondicionamiento físico si fueron creados por usted y simplemente están dando 2Train. permiso completo para albergar, vender, promocionar y distribuir estos programas. \n 5. Contratista independiente: nada en este acuerdo se interpretará, de ninguna manera, para constituir al Entrenador personal como agente, empleado o representante de 2Train. 2Train no es responsable de retener o pagar impuestos sobre la renta federales, estatales o locales, FICA, desempleo u otros impuestos similares, ni responsabilidad, compensación laboral u otro seguro similar. Usted reconoce que 2Train no es su empleador, sino simplemente un anfitrión para que venda sus programas de acondicionamiento físico. \n 6. Ley de Control: Este acuerdo se regirá por las leyes del estado indicado como la dirección de 2Train. Cualquier disputa que surja de este acuerdo se resolverá en el estado y condado de la dirección de WeStrive, como se establece en este acuerdo. \n 7. Disposiciones generales: \n a) Notificaciones. Cualquier notificación requerida o permitida en virtud de este Acuerdo será suficiente, si se hace por escrito y se entrega personalmente, se envía por fax o se envía por correo certificado, con acuse de recibo, a las direcciones enumeradas anteriormente o a cualquier otra dirección que cualquiera de las partes pueda designar. a la otra parte en la forma prevista anteriormente. \n b) Acuerdo completo. Este acuerdo, incluidos los anexos del mismo, contiene el acuerdo completo y el entendimiento entre las partes en cuanto al objeto de este acuerdo. Ninguna obligación, condición, garantía o representación anterior o contemporánea creará obligaciones vinculantes para ninguna de las partes, excepto las establecidas expresamente en este documento. Este acuerdo no puede ser cambiado o alterado excepto por un acuerdo escrito firmado por ambas partes.'
      },
      basicTerms: {
        title: 'Términos básicos',
        description: '1. Los Términos forman un acuerdo legalmente vinculante entre usted y 2Train. Por favor, tómese el tiempo para leerlos cuidadosamente. Si tiene menos de 18 años, solo puede usar 2Train con el consentimiento de su padre o tutor legal. Asegúrese de que su padre, madre o tutor legal haya revisado y discutido estos Términos con usted. \n 2. Debe tener al menos 13 años para usar 2Train. \n 3. No puede publicar fotos u otro contenido violento, desnudo, parcialmente desnudo, discriminatorio, ilegal, infractor, odioso, pornográfico o sexualmente sugerente a través del Servicio. \n 4. Usted es responsable de cualquier actividad que ocurra a través de su cuenta y acepta que no venderá, transferirá, licenciará ni asignará su cuenta, seguidores, nombre de usuario o cualquier derecho de la cuenta. Con la excepción de las personas o empresas que están expresamente autorizadas para crear cuentas en nombre de sus empleadores o clientes, 2Train prohíbe la creación y usted acepta que no creará una cuenta para nadie que no sea usted mismo. También declara que toda la información que proporcione o proporcione a 2Train al registrarse y en cualquier otro momento será verdadera, precisa, actual y completa, y acepta actualizar su información según sea necesario para mantener su veracidad y precisión. \n 5. Usted acepta que no solicitará, recopilará ni utilizará las credenciales de inicio de sesión de otros usuarios de 2Train. \n 6. Usted es responsable de mantener su contraseña en secreto y segura. \n 7. No debe difamar, acechar, intimidar, abusar, hostigar, amenazar, suplantar o intimidar a personas o entidades y no debe publicar información privada o confidencial a través del Servicio, lo que incluye, entre otros, a usted o a cualquier otra persona. s información de tarjeta de crédito, seguro social o números de identidad nacional alternativos, números de teléfono no públicos o direcciones de correo electrónico no públicas. \n 8. No puede usar el Servicio para ningún propósito ilegal o no autorizado. Usted acepta cumplir con todas las leyes, reglas y regulaciones (por ejemplo, federales, estatales, locales y provinciales) aplicables a su uso del Servicio y su Contenido (definido a continuación), incluidas, entre otras, las leyes de derechos de autor. \n 9. Usted es el único responsable de su conducta y cualquier dato, texto, archivo, información, nombres de usuario, imágenes, gráficos, fotos, perfiles, clips de audio y video, sonidos, obras musicales, trabajos de autoría, aplicaciones, enlaces y otros contenido o materiales (colectivamente, "Contenido") que envíe, publique o muestre en o a través del Servicio. \n 10. No debe cambiar, modificar, adaptar o alterar el Servicio o cambiar, modificar o alterar otro sitio web para implicar falsamente que está asociado con el Servicio o 2Train. \n 11. No debe acceder a la API privada de WeStrive. \n 12. No debe crear ni enviar correos electrónicos no deseados, comentarios, me gusta u otras formas de comunicaciones comerciales o de acoso (a/k/a "spam") a ningún usuario. \n 13. No debe usar nombres de dominio o URL web en su nombre de usuario sin el consentimiento previo por escrito de 2Train. \n 14. No debe interferir ni interrumpir el Servicio o los servidores o las redes conectadas al Servicio, incluso mediante la transmisión de gusanos, virus, spyware, malware o cualquier otro código de naturaleza destructiva o disruptiva. No puede inyectar contenido o código ni alterar o interferir de otro modo con la forma en que se presenta o muestra cualquier página de 2Train en el navegador o dispositivo de un usuario. \n 15. No debe crear cuentas con el Servicio a través de medios no autorizados, incluidos, entre otros, mediante el uso de un dispositivo automatizado, secuencia de comandos, bot, araña, rastreador o raspador. \n 16. No debe intentar restringir el uso o disfrute del Servicio por parte de otro usuario y no debe fomentar ni facilitar la violación de estos Términos de servicio o cualquier otro término de 2Train. \n 17. La violación de estos Términos de servicio puede, a exclusivo criterio de WeStrive, dar lugar a la cancelación de su cuenta de 2Train. Usted comprende y acepta que 2Train no puede y no será responsable del Contenido publicado en el Servicio y usted usa el Servicio bajo su propio riesgo. Si viola la letra o el espíritu de estos Términos de servicio, o crea un riesgo o una posible exposición legal para 2Train, podemos dejar de proporcionarle todo o parte del Servicio.'
      }
    },
    privacyPolicy: {
      title: 'Política de privacidad',
      intro: 'Proteger su información privada es nuestra prioridad. Esta Declaración de Privacidad se aplica a 2Train.net y rige la recopilación y el uso de datos. A los efectos de esta Política de privacidad, a menos que se indique lo contrario, todas las referencias a 2Train y 2Train.net. El sitio web de 2Train es un sitio de la aplicación 2Train Fitness. Al usar el sitio web o la aplicación móvil de 2Train, usted acepta las prácticas de datos descrito en esta declaración.',
      collectPersonalInfo: {
        title: 'Recopilación de su información personal',
        description: 'Para brindarle mejor los productos y servicios ofrecidos en nuestro Sitio, 2Train puede recopilar información de identificación personal, como su: Nombre y apellido, dirección de correo electrónico. 2Train también puede recopilar información anónima información demográfica, que no es exclusiva de usted, como su: Edad y Sexo. Tenga en cuenta que si divulga directamente información de identificación personal o datos confidenciales personales a través de los foros de mensajes públicos de 2Train, esta información puede ser recopilada y utilizada por otros. No recopilamos ninguna información personal sobre usted a menos que usted nos lo proporcione voluntariamente. Sin embargo, es posible que deba proporcionar cierta información personal para nosotros cuando elige usar ciertos productos o servicios disponible en el Sitio. Estos pueden incluir: (a) registrarse para obtener una cuenta en nuestro Sitio; (b) participar en un sorteo o concurso patrocinado por nosotros o uno de nuestros socios; (c) suscribirse a ofertas especiales de terceros seleccionados; (d) enviándonos un mensaje de correo electrónico; (e) enviar su tarjeta de crédito u otra información de pago al ordenar y comprar productos y servicios en nuestro Sitio. Es decir, utilizaremos su información para, pero no limitado a, comunicarse con usted en relación con los servicios y/o productos que tiene solicitado de nosotros. También podemos recopilar información personal o no personal adicional en el futuro.'
      },
      useOfPersonaInfo: {
        title: 'Uso de su información personal',
        description: 'No recopilamos ninguna información personal sobre usted a menos que usted proporcione voluntariamente a nosotros 2Train recopila y utiliza su información personal para operar su(s) sitio(s) web y entregar los servicios que ha solicitado. 2Train también puede usar su identificación personal información para informarle sobre otros productos o servicios disponibles de 2Train y sus afiliados.'
      },
      sharingPersonalInfo: {
        title: 'Compartir información con terceros',
        description: '2Train no tiene que vender, alquilar o ceder sus listas de clientes a terceros. 2Train puede compartir datos con socios confiables para ayudar a realizar análisis estadísticos, enviarle un correo electrónico o correo postal, brindarle atención al cliente u organizar entregas. Todos estos terceros tienen prohibido el uso de su información personal excepto para proporcionan estos servicios a 2Train, y están obligados a mantener la confidencialidad de tu información 2Train puede divulgar su información personal, sin previo aviso, si así lo requiere ley o en la creencia de buena fe de que tal acción es necesaria para: (a) cumplir con los edictos de la ley o cumplir con el proceso legal presentado en 2Train o el sitio; (b) proteger y defender los derechos o propiedad de 2Train; y/o (c) actuar bajo circunstancias exigentes para proteger la seguridad personal de los usuarios de 2Train, o del público.'
      },
      userTrackingBehavior: {
        title: 'Seguimiento del comportamiento del usuario',
        description: '2Train puede realizar un seguimiento de los sitios web y las páginas que visitan nuestros usuarios dentro de 2Train, para determinar qué servicios de 2Train son los más populares. Estos datos se utilizan entregar contenido personalizado y publicidad dentro de 2Train a los clientes cuyos el comportamiento indica que están interesados en un área temática en particular.'
      },
      autoCollectInfo: {
        title: 'Información recopilada automáticamente',
        description: 'La información sobre el hardware y el software de su computadora puede recopilarse automáticamente por 2Train. Esta información puede incluir: su dirección IP, tipo de navegador, nombres de dominio, tiempos de acceso y direcciones de sitios web de referencia. Esta información se utiliza para la operación del servicio, para mantener la calidad del servicio y para proporcionar estadísticas generales sobre el uso del sitio web de 2Train.'
      },
      links: {
        title: 'Enlaces',
        description: 'Este sitio web contiene enlaces a otros sitios. Tenga en cuenta que no somos responsables por el contenido o las prácticas de privacidad de dichos otros sitios. Alentamos a nuestros usuarios a ser conscientes cuando abandonan nuestro sitio y leer las declaraciones de privacidad de cualquier otro sitio que recopila información de identificación personal.'
      },
      childrenUnderAge: {
        title: 'Niños menores de trece años',
        description: '2Train no recopila a sabiendas información de identificación personal de niños menores la edad de trece años. Si es menor de trece años, debe preguntar a su padre o tutor para obtener permiso para usar este sitio web.'
      },
      mailCommunication: {
        title: 'Comunicaciones por correo electrónico',
        description: 'De vez en cuando, 2Train puede comunicarse con usted por correo electrónico con el fin de proporcionar anuncios, ofertas promocionales, alertas, confirmaciones, encuestas y/u otras comunicaciones en general.'
      },
      statementChanges: {
        title: 'Cambios a esta Declaración',
        description: '2Train se reserva el derecho de cambiar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cambios significativos en la forma en que tratamos la información personal mediante el envío de un aviso a la dirección de correo electrónico principal especificada en su cuenta, colocando un aviso destacado en nuestro sitio, y/o actualizando cualquier información de privacidad en esta página. Su uso continuado del Sitio y/o Servicios disponibles a través de este Sitio después de dichas modificaciones constituirán su: (a) reconocimiento de la Política de privacidad modificada; y (b) acuerdo de cumplir y estar sujeto a esa Política.'
      },
      contactInfo: {
        title: 'Información del contacto',
        description: '2Train agradece sus preguntas o comentarios con respecto a esta Declaración de privacidad. Si cree que 2Train no se ha adherido a esta Declaración, comuníquese con 2Train en: Dirección de correo electrónico: help@2train.net. Efectivo a partir del 01 de febrero de 2022.'
      },
    },
  }
}

export default SpanishDictionary