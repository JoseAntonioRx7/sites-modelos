// ============================================================================
// CONTEÚDO DO SITE
// Edite os valores abaixo para trocar textos, imagens e links sem precisar
// mexer nos componentes. Cada seção da página consome um destes arrays/objetos.
// ============================================================================

export const brand = {
  name: 'Nail Design',
  nameWithMark: 'Studio Mohay',
}

export const nav = [
  { label: 'Início', href: '#top' },
  { label: 'Galeria', href: '#trabalhos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Agendamento', href: '#contato' },
]

export const socials = []

export const hero = {
  eyebrow: 'Nail art feita para você',
  headline: 'Da francesinha clássica ao detalhe autoral.',
  image: '/images/SaveClip.App_815701395_18140331481581395_5891594621850897303_n.jpg',
  imageAlt: 'Alongamento em gel com francesinha branca e esmaltação rosada',
  scrollLabel: 'Explore os trabalhos',
}

export const portfolio = {
  eyebrow: 'Um pouco do nosso trabalho',
  title: 'Seu estilo, em cada detalhe',
  subtitle:
    'Francesinhas delicadas, acabamentos impecáveis e nail art para transformar sua ideia em um conjunto único.',
  projects: [
    {
      id: 'nail-art-minimalista',
      name: 'Nail art minimalista',
      category: 'Traços delicados e brilho sutil',
      image: '/images/SaveClip.App_791510126_18137875072581395_973703633302365107_n.jpg',
      dark: false,
    },
    {
      id: 'detalhes-em-relevo',
      name: 'Detalhes em relevo',
      category: 'Texturas e aplicações',
      image: '/images/SaveClip.App_801882424_18138989017581395_7775329828392019423_n.jpg',
      dark: false,
    },
    {
      id: 'vermelho-classico',
      name: 'Vermelho marcante',
      category: 'Cor intensa com personalidade',
      image: '/images/SaveClip.App_762291686_18133849828581395_140646376896284725_n.jpg',
      dark: true,
    },
    {
      id: 'nude-francesinha',
      name: 'Nude & francesinha',
      category: 'Um clássico repaginado',
      image: '/images/SaveClip.App_788948709_18137622244581395_4112735074708007472_n.jpg',
      dark: false,
    },
  ],
}

export const services = {
  eyebrow: 'Seu próximo conjunto',
  title: 'Serviços',
  items: [
    {
      number: '01',
      title: 'Alongamento',
      description:
        'Comprimento e formato pensados para combinar com sua rotina e com o estilo que você quer expressar.',
      image: '/images/SaveClip.App_757454718_18133493167581395_4126208871404486041_n.jpg',
    },
    {
      number: '02',
      title: 'Nail art',
      description:
        'Do minimalista ao maximalista: escolha as cores, os detalhes e as referências que têm a sua cara.',
      image: '/images/SaveClip.App_719126459_18126345001581395_6134074050481331088_n.jpg',
    },
    {
      number: '03',
      title: 'Francesinha',
      description:
        'Um clássico renovado com diferentes cores, formatos e acabamentos para sair do óbvio.',
      image: '/images/SaveClip.App_728893310_18129242848581395_132308582708224885_n.jpg',
    },
    {
      number: '04',
      title: 'Esmaltação',
      description:
        'Cores clássicas ou vibrantes, com um acabamento caprichado e atenção a cada detalhe.',
      image: '/images/SaveClip.App_694131074_18121283152581395_5616180834433163360_n.jpg',
    },
  ],
}

export const pricing = {
  eyebrow: 'Valores sob consulta',
  title: 'Um conjunto pensado nos seus detalhes',
  plans: [
    {
      name: 'Clássico',
      price: 'Sob consulta',
      period: '',
      description: 'Para quem ama um visual elegante, com acabamento limpo e atemporal.',
      cta: 'Consultar horário',
      highlighted: false,
      features: [
        'Francesinha tradicional ou colorida',
        'Tons nude e rosados',
        'Formato escolhido com você',
        'Valor definido conforme o serviço',
      ],
    },
    {
      name: 'Nail art',
      price: 'Sob consulta',
      period: '',
      description: 'Para dar vida à sua referência com cores, aplicações e detalhes especiais.',
      cta: 'Criar meu conjunto',
      highlighted: true,
      features: [
        'Desenho personalizado',
        'Possibilidade de efeitos e aplicações',
        'Paleta escolhida com você',
        'Valor definido conforme a arte',
      ],
    },
  ],
}

export const contact = {
  eyebrow: 'Agendamento',
  title: 'Vamos escolher seu próximo visual?',
  details: 'Conte um pouco do que você está imaginando. O atendimento e os valores são combinados conforme o serviço escolhido.',
  formTitle: 'Me conte sua ideia',
}

export const footer = {
  description: 'Nail art, cuidado e atenção em cada detalhe do seu próximo conjunto.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Início', href: '#top' },
        { label: 'Galeria', href: '#trabalhos' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Contato', href: '#contato' },
      ],
    },
  ],
  legal: 'Studio Mohay. Todos os direitos reservados.',
}
