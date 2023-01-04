import { formattedURL } from "./formattedURL"

const categories = {
  melhores_ofertas: {
    title: 'Melhores ofertas',
    slug: formattedURL('melhores ofertas'),
    icon: 'star-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 2
  moveis_e_decoracao: {
    title: 'Móveis e decoração',
    slug: formattedURL('móveis e decoração'),
    icon: 'home-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 3
  cama_mesa_e_banho: {
    title: 'Cama mesa e banho',
    slug: formattedURL('cama mesa e banho'),
    icon: 'bed-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 4
  smartphones: {
    title: 'Smartphones',
    slug: formattedURL('smartphones'),
    icon: 'phone-portrait-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 5
  eletrodomesticos: {
    title: 'Eletrodomésticos',
    slug: formattedURL('eletrodomésticos'),
    icon: 'desktop-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 6
  eletronicos: {
    title: 'Eletrônicos',
    slug: formattedURL('eletrônicos'),
    icon: 'hardware-chip-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 7
  audio: {
    title: 'Áudio',
    slug: formattedURL('áudio'),
    icon: 'headset-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['audio']
    }
  },

  // Category 8
  notebooks: {
    title: 'Notebooks',
    slug: formattedURL('notebooks'),
    icon: 'laptop-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 9
  moda: {
    title: 'Moda',
    slug: formattedURL('moda'),
    icon: 'shirt-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 10
  cosmeticos: {
    title: 'Cosméticos',
    slug: formattedURL('cosméticos'),
    icon: 'flower-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  },

  // Category 11
  fitness_e_esportes: {
    title: 'Fitness e Esportes',
    slug: formattedURL('fitness e esportes'),
    icon: 'barbell-outline',
    bannerInitial: {
      backgroundBanner: 'https://i.imgur.com/GOTvD3d.jpg',
      titleBanner: 'Melhores <em>promoções</em> em <em>smartphones</em> e notebooks!',
      descriptionBanner: 'As melhores lojas com promoções incríveis para você aproveitar, <br> confira as melhores seleções da Promofaster em smartphones e notebooks!',
      numberOfSlides: 10,
      bestOffert: false,
      categoriesOfSlides: ['smartphones', 'notebooks']
    }
  }
}
export default categories