export default {
  global: {
    componenteFormativo: 'Contratos de trabajo y liquidación de nómina',
    descripcionCurso:
      'El talento humano es el recurso más importante con el que cuenta la organización, es quien se encarga de ayudar a hacer realidad todas las metas y estrategias que la empresa propone. Por lo anterior, es de vital importancia que sus prestaciones sociales sean garantizadas por el ordenador del gasto, como una forma de compensar la contraprestación del servicio del colaborador hacia la empresa; teniendo en cuenta lo anterior es necesario tener conocimiento con respecto a la liquidación y pago correcto de las prestaciones sociales, las cuales se reflejan en un documento llamado nómina. Adicionalmente, para llevar a cabo la liquidación y contabilización de la nómina, es fundamental conocer previamente los tipos de contratos, requisitos y características de cada uno de ellos.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Legislación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Política contable',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Contrato de trabajo, elementos y tipos de contrato de trabajo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Deberes y derechos de empleado y empleador',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Causales de terminación del contrato de trabajo e indemnizaciones',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Política contable',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Trabajo extra y recargos ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Devengado',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Deducciones',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Seguridad social y parafiscales',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Prestaciones sociales',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Salario integral',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Novedades',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Liquidación de nómina',
            hash: 't_2_9',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2ª ed.). Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047',
    },
    {
      referencia: 'CAFASUR. (2018, 23 febrero). Aportes parafiscales.',
      link: 'https://www.cafasur.com.co/subsidios/aportes-parafiscales',
    },
    {
      referencia:
        'Castro, Y. (2020, 23 julio). Obligaciones de los trabajadores. consultorcontable.com. ',
      link:
        'https://www.consultorcontable.com/obligaciones-de-los-trabajadores',
    },
    {
      referencia:
        'Comité de Normas Internacionales de Contabilidad. (1998). Beneficios a los empleados (NIC 19).',
      link:
        'https://www2.deloitte.com/content/dam/Deloitte/cr/Documents/audit/documentos/niif-2019/NIC%2019%20-%20Beneficios%20a%20los%20Empleados.pdf',
    },
    {
      referencia:
        'Coral, L. y Gudiño, E. (2014). Contabilidad universitaria. (7.a ed.). McGraw Hill - Colombia ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=105',
    },
    {
      referencia:
        'Dussán, W. (2019, 8 enero). Tarifa de retención en la fuente por ingresos laborales ley 1943. consultorcontable.com.',
      link:
        'https://www.consultorcontable.com/tarifa-de-retenci%C3%B3n-en-la-fuente-por-ingresos-laborales-ley-1943/',
    },
    {
      referencia:
        'Dussán, W. (2020). Prestaciones sociales. consultorcontable.com',
      link:
        'https://www.consultorcontable.com/datos-hist%C3%B3ricos/prestaciones-sociales/',
    },
    {
      referencia:
        'Gerencie.com. (2019, 26 marzo). Elementos del contrato de trabajo.',
      link:
        ' https://www.gerencie.com/elementos-del-contrato-de-trabajo.html#:%7E:text=El%20art%C3%ADculo%2023%20del%20c%C3%B3digo,Retribuci%C3%B3n%20o%20remuneraci%C3%B3n%20del%20servicio',
    },
    {
      referencia:
        'Gerencie.com. (2020a, 3 febrero). ¿Cómo se liquidan las horas extras? ',
      link: 'https://www.gerencie.com/como-se-liquidan-las-horas-extras.html',
    },
    {
      referencia:
        'Gerencie.com. (2020b, junio 13). Retención en la fuente por ingresos laborales. ',
      link:
        'https://www.gerencie.com/retencion-en-la-fuente-por-ingresos-laborales.html',
    },
    {
      referencia:
        'Gerencie.com. (2021a, febrero 8). ¿Qué es la seguridad social? ',
      link:
        'https://www.gerencie.com/que-es-la-seguridad-social-en-una-relacion-laboral.html',
    },
    {
      referencia:
        'Gerencie.com. (2021b, 20 abril). Exoneración de aportes parafiscales y seguridad social',
      link:
        'https://www.gerencie.com/exoneracion-de-aportes-a-seguridad-social-y-parafiscales.html',
    },
    {
      referencia: 'Gerencie.com. (2021c, abril 16). Salario integral',
      link:
        'https://www.gerencie.com/salario-integral.html#:%7E:text=El%20salario%20integral%20es%20una,los%20conceptos%20en%20uno%20s%C3%B3lo.',
    },
    {
      referencia:
        'Ginnamarce. (2014, septiembre). Derecho laboral colombiano. ginnamaece.wordpress.com.',
      link: 'https://ginnamaece.wordpress.com/derecho-familiar/.',
    },
    {
      referencia:
        'Hernandez, C. (2015, 9 noviembre). ¿Cuáles son las justas causas que tiene el empleador para dar por terminado el contrato de trabajo? Instituto Nacional de Contadores Públicos de Colombia',
      link:
        'https://incp.org.co/cuales-son-las-justas-causas-que-tiene-el-empleador-para-dar-por-terminado-el-contrato-de-trabajo/',
    },
    {
      referencia:
        'Instituto Nacional de Contadores Públicos de Colombia. (s. f.). Código Sustantivo del Trabajo.',
      link: 'https://incp.org.co/Site/productosyservicios/legislativa/cst.htm',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2008, 22 agosto) Terminación unilateral del contrato de trabajo sin justa 	causa. cijuf.org.co',
      link: 'https://cijuf.org.co/conceptosminproteccion/agosto/c246299.html',
    },
    {
      referencia:
        'Ministerio del Trabajo. Republica de Colombia. (2013). Formas y libertad de estipulación.',
      link:
        'http://www.comunidadcontable.com/BancoMedios/Documentos%20PDF/cpto-2556-%2013.pdf',
    },
    {
      referencia:
        'Moncayo, C. (2015, 21 septiembre). ¿Cuáles son las justas causas que tiene el trabajador para dar por terminado el contrato de trabajo? Instituto Nacional de Contadores Públicos de Colombia',
      link:
        'https://incp.org.co/cuales-son-las-justas-causas-que-tiene-el-trabajador-para-dar-por-terminado-el-contrato-de-trabajo/',
    },
    {
      referencia:
        'Moncayo, C. (2017, 11 diciembre). Políticas Contables. Instituto Nacional de Contadores Públicos de Colombia.',
      link: 'https://incp.org.co/politicas-contables-2/',
    },
    {
      referencia:
        'Moreno, S. (2013, 24 mayo). El derecho laboral colombiano. derecho-laboral8.webnode.com.co.',
      link:
        ' https://derecho-laboral8.webnode.com.co/news/el-derecho-laboral-colombiano/',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 6 noviembre). Código Sustantivo del Trabajo.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Varón, L. (2014, 24 abril). Qué debe contener una política contable. Gerencie.com',
      link:
        'https://www.gerencie.com/que-debe-contener-una-politica-contable.html',
    },
  ],
  glosario: [
    {
      termino: 'Persona natural',
      significado:
        'Individuo que al actuar en su propio nombre se ocupa de alguna o algunas actividades que la ley considera mercantiles.',
    },
    {
      termino: 'Provisión',
      significado:
        'Valores que deben ser reconocidos, hoy, con el propósito de ser desembolsados en el futuro..',
    },
    {
      termino: 'Ingreso Base de Cotización IBC',
      significado:
        'Se utiliza para calcular los aportes a seguridad social y parafiscales.',
    },
    {
      termino: 'Agente de retención',
      significado:
        'Persona natural o jurídica que ha sido designada para que efectúe la retención en la fuente cuando haga un pago que esté sometido a retención.',
    },
    {
      termino: 'Depuración',
      significado:
        'Determinación de la base para calcular impuestos, restando a los ingresos totales todos los beneficios posibles que la legislación tributaria consagra.',
    },
    {
      termino: 'Rentas exentas',
      significado:
        'Son un tipo de ingresos que, aun siendo ingresos fiscales, no están sujetos al impuesto de renta y complementarios.',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 1072 de 2015. [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015 (versión actualizada abril 15 de 2016).',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      texto:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2ª ed.). Ediciones de la U.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Larrota',
        cargo: 'Instructor',
        centro: 'Centro de Servicios Financieros Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Luis Zenen Arévalo Mantilla'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Ariza',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Adriana Marcela Suárez Eljure'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Gilberto Junior Rodriguez Rodriguez'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['José Jaime Luis Tang Pinzón'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Nelson Vera'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ['Zuleidy Maria Ruiz Torres'],
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
