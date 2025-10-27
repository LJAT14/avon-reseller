export const categories = [
  { id: 'all', name: 'Todos', icon: '✨' },
  { id: 'makeup', name: 'Maquilhagem', icon: '💄' },
  { id: 'skincare', name: 'Cuidados da Pele', icon: '🌸' },
  { id: 'bodycare', name: 'Cuidados Corporais', icon: '🧴' },
  { id: 'fragrance', name: 'Fragrâncias', icon: '🌺' },
  { id: 'haircare', name: 'Cuidados Capilares', icon: '💆‍♀️' },
  { id: 'suncare', name: 'Proteção Solar', icon: '☀️' },
  { id: 'giftsets', name: 'Gift Sets', icon: '🎁' },
  { id: 'home', name: 'Casa & Aromas', icon: '🕯️' }
];

export const products = [
  // Makeup
  {
    id: 1,
    name: 'Flawless Match Concealer',
    code: '1532035',
    category: 'makeup',
    price: 8200,
    volume: '3ml',
    description: 'Corretivo impecável com acabamento natural. Cobertura média a alta, naturalmente radiante controla o brilho.',
    shades: ['31N Neutral Medium', '32G Golden Medium', '435N', '438P', '420G Caramel'],
    features: ['Cobertura média a alta', 'Acabamento natural', 'Disfarça imperfeições', 'Controla o brilho'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    featured: true,
    new: true
  },
  {
    id: 2,
    name: 'Flawless Match Natural Finish Foundation',
    code: '1547689',
    category: 'makeup',
    price: 11800,
    volume: '30ml',
    description: 'Base impecável que combina perfeitamente com a sua pele. Desenvolvida por especialistas em cor para todos os tons de pele.',
    shades: ['420G Caramel', '435N', '438P'],
    features: ['SPF 20', 'Ácido Hialurónico', 'Acabamento natural', 'Cobertura média'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500',
    featured: true,
    new: true
  },

  // Skincare
  {
    id: 3,
    name: 'Age Restore Face Cream',
    code: '1474845',
    category: 'skincare',
    price: 6400,
    volume: '100ml',
    description: 'Creme anti-idade que ajuda a restaurar a firmeza e a hidratação da pele, suavizando linhas finas.',
    features: ['Anti-idade', 'Restaura firmeza', 'Suaviza linhas finas', '3 em 1'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500'
  },
  {
    id: 4,
    name: 'Even Tone Face Cream - Dia',
    code: '1545725',
    category: 'skincare',
    price: 6400,
    volume: '100ml',
    description: 'Uniformiza o tom da pele e proporciona luminosidade com vita-complex.',
    features: ['Uniformiza tom', 'Hidrata', 'Luminosidade', 'Vita-complex'],
    image: 'https://images.unsplash.com/photo-1556228841-0fdccc487151?w=500'
  },
  {
    id: 5,
    name: 'Even Tone Face Cream - Noite',
    code: '1474846',
    category: 'skincare',
    price: 6400,
    volume: '100ml',
    description: 'Creme noturno que uniformiza o tom da pele enquanto descansa.',
    features: ['Uso noturno', 'Uniformiza tom', 'Hidratação profunda', 'Vita-complex'],
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500'
  },
  {
    id: 6,
    name: 'Máscara Facial Nutritiva com Abacate',
    code: '1486744',
    category: 'skincare',
    price: 4600,
    volume: '75ml',
    description: 'Máscara facial nutritiva de abacate, que nutre, hidrata e suaviza. Indicado para peles secas.',
    features: ['Nutre', 'Hidrata', 'Suaviza', 'Para pele seca', '3 em 1'],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500'
  },
  {
    id: 7,
    name: 'Avon Care Refreshing Gel 3 em 1',
    code: '1377111',
    category: 'skincare',
    price: 5900,
    volume: '150ml',
    description: 'Gel facial multifuncional que remove maquiagem, refresca e limpa profundamente.',
    features: ['Remove maquiagem', 'Refresca', 'Limpa profundamente', 'Vitamina E', 'Todos os tipos de pele'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500'
  },

  // Suncare
  {
    id: 8,
    name: 'Creme de Proteção Solar Facial SPF30',
    code: '1304667',
    category: 'suncare',
    price: 9800,
    volume: '50ml',
    description: '30 vezes mais proteção do que a pele nua. Controla o brilho da pele.',
    features: ['SPF 30', 'UVA/UVB', 'Very water resistant', 'Oil free', 'Derma 360°'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    featured: true
  },
  {
    id: 9,
    name: 'Loção Corporal SPF30',
    code: '1387643',
    category: 'suncare',
    price: 13800,
    volume: '135ml',
    description: 'Proteção solar corporal com hidratação duradoura.',
    features: ['SPF 30', 'UVA/UVB', 'Hidratante', 'Very water resistant', 'Dermatologicamente testada'],
    image: 'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?w=500'
  },
  {
    id: 10,
    name: 'Loção Facial e Corporal SPF50',
    code: '1519663',
    category: 'suncare',
    price: 15800,
    volume: '135ml',
    description: 'Máxima proteção solar para rosto e corpo.',
    features: ['SPF 50', 'UVA/UVB', 'Rosto e corpo', 'Very water resistant', 'Derma 360°'],
    image: 'https://images.unsplash.com/photo-1556228841-c3d21c4ae5ce?w=500'
  },
  {
    id: 11,
    name: 'Avon Care Sol + Pós-sol',
    code: '2599000',
    category: 'suncare',
    price: 6400,
    volume: '150ml',
    description: 'Gel hidratante refrescante indicado para usar após a exposição solar.',
    features: ['Refresca', 'Acalma', 'Previne descamação', 'Hidrata profundamente', 'Cooling & hydrating'],
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500'
  },

  // Body Care
  {
    id: 12,
    name: 'Avon Care Loção Corporal - Pomegranate',
    code: '1485852',
    category: 'bodycare',
    price: 10200,
    volume: '720ml',
    description: 'Loção corporal hidratante com romã. Antioxidante, hidratação e radiância.',
    features: ['48H hidratação', 'Antioxidante', 'Romã', '720ml'],
    image: 'https://images.unsplash.com/photo-1556228841-cebb-1b4a-e1bb?w=500'
  },
  {
    id: 13,
    name: 'Avon Care Loção Corporal - Avocado',
    code: '1485837',
    category: 'bodycare',
    price: 10200,
    volume: '720ml',
    description: 'Loção corporal hidratante com abacate. Reposição e hidratação.',
    features: ['24H hidratação', 'Abacate', 'Nutritiva', '720ml'],
    image: 'https://images.unsplash.com/photo-1556228994-a19c2fd7e820?w=500'
  },
  {
    id: 14,
    name: 'Avon Care Shimmering Loção Corporal',
    code: '1563974',
    category: 'bodycare',
    price: 10200,
    volume: '720ml',
    description: 'Loção corporal com brilho radiante para pele iluminada.',
    features: ['Brilho radiante', 'Hidratação', 'Perfumada', '720ml'],
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500'
  },
  {
    id: 15,
    name: 'Avon Care Hydrating Gel de Banho',
    code: '1563977',
    category: 'bodycare',
    price: 8200,
    volume: '500ml',
    description: 'Gel de banho hidratante com fragrância refrescante.',
    features: ['Hidratante', 'Fragrância refrescante', 'Espuma cremosa', '500ml'],
    image: 'https://images.unsplash.com/photo-1584305574293-b7b2c0a74f86?w=500'
  },

  // Bronzing
  {
    id: 16,
    name: 'Spray Bronzeador',
    code: '3239300',
    category: 'bodycare',
    price: 11800,
    volume: '150ml',
    description: 'Spray bronzeador que ajuda a prolongar a duração do bronzeado.',
    features: ['Bronzeamento gradual', 'Resistente à água', 'FPS 5', 'Spray fácil de aplicar'],
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=500'
  },
  {
    id: 17,
    name: 'Loção de Bronzeado',
    code: '1446327',
    category: 'bodycare',
    price: 14400,
    volume: '200ml',
    description: 'Loção hidratante resistente à água com FPS 5 para bronzeado gradual.',
    features: ['FPS 5', 'Resistente à água', 'Hidratante', 'Prolonga bronzeado'],
    image: 'https://images.unsplash.com/photo-1556228852-80a8f6485935?w=500'
  },

  // Fragrances
  {
    id: 18,
    name: 'Perceive Para Ele EDT',
    code: '1490710',
    category: 'fragrance',
    price: 25200,
    volume: '100ml',
    description: 'Revele o seu santuário interior com aromas elevadores. Orquídea diamante, peónia branca e frésia.',
    notes: ['Orquídea Diamante', 'Peónia Branca', 'Frésia'],
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
    featured: true
  },
  {
    id: 19,
    name: 'Segno EDP',
    code: '1490717',
    category: 'fragrance',
    price: 22500,
    volume: '75ml',
    description: 'Elegância e poder em cada gota. Bergamota, limão siciliano e pimenta preta, lavanda, sálvia e gerânio vetiver.',
    notes: ['Bergamota', 'Limão Siciliano', 'Pimenta Preta', 'Lavanda', 'Vetiver'],
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500',
    featured: true
  },
  {
    id: 20,
    name: 'Segno Impact EDP',
    code: '1491566',
    category: 'fragrance',
    price: 22500,
    volume: '75ml',
    description: 'Fragrância marcante com notas amadeiradas e aromáticas com frescor moderno.',
    notes: ['Toranja', 'Gengibre', 'Lavanda', 'Madeira Âmbar', 'Vetiver'],
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500'
  },
  {
    id: 21,
    name: 'Delightful Eau de Cologne',
    code: '1537518',
    category: 'fragrance',
    price: 9800,
    volume: '200ml',
    description: 'Fragrância irresistível com notas de chantilly, caramelo e sândalo.',
    notes: ['Chantilly', 'Caramelo', 'Sândalo'],
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500'
  },

  // Body Mists
  {
    id: 22,
    name: 'Avon Senses Body Mist - Maldives Sands',
    code: '1564625',
    category: 'fragrance',
    price: 5000,
    volume: '100ml',
    description: 'Névoa corporal refrescante com aroma de sal marinho e frangipani.',
    features: ['Fragrância leve', 'Refrescante', 'Sal marinho', 'Frangipani'],
    image: 'https://images.unsplash.com/photo-1588405748879-acb3aad8957e?w=500',
    new: true
  },
  {
    id: 23,
    name: 'Avon Senses Body Mist - Velvet Seduction',
    code: '1491602',
    category: 'fragrance',
    price: 5000,
    volume: '100ml',
    description: 'Névoa corporal sedutora com notas de framboesa e orquídea.',
    features: ['Sedutora', 'Framboesa', 'Orquídea'],
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?w=500'
  },
  {
    id: 24,
    name: 'Avon Senses Body Mist - Aloha Monoi',
    code: '1491605',
    category: 'fragrance',
    price: 5000,
    volume: '100ml',
    description: 'Névoa corporal tropical com coco e flor de tiaré.',
    features: ['Tropical', 'Coco', 'Flor de Tiaré'],
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500'
  },
  {
    id: 25,
    name: 'Avon Senses Body Mist - Celestial Bloom',
    code: '1564151',
    category: 'fragrance',
    price: 5000,
    volume: '100ml',
    description: 'Violetas cósmicas e aroma de framboesa para uma experiência celestial.',
    features: ['Violetas cósmicas', 'Framboesa', 'Celestial'],
    image: 'https://images.unsplash.com/photo-1615397349754-446b37a151cd?w=500',
    new: true
  },

  // Bath Products
  {
    id: 26,
    name: 'Bubble Bath - Mulled Spice',
    code: '1524047',
    category: 'bodycare',
    price: 6200,
    volume: '250ml',
    description: 'Transforme seus momentos de relaxamento com espuma rica e cremosa.',
    features: ['Espuma rica', 'Aroma especiado', 'Relaxante', 'Sensorial'],
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500'
  },
  {
    id: 27,
    name: 'Bubble Bath - Apple Pie',
    code: '1524048',
    category: 'bodycare',
    price: 6200,
    volume: '250ml',
    description: 'Espuma de banho com aroma doce de tarte de maçã.',
    features: ['Espuma cremosa', 'Aroma doce', 'Maçã', 'Relaxante'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500'
  },
  {
    id: 28,
    name: 'Sabonete de Glicerina',
    code: '6390600',
    category: 'bodycare',
    price: 2800,
    volume: '90gr',
    description: 'Sabonete em barra enriquecido com glicerina e vitamina E.',
    features: ['Glicerina', 'Vitamina E', 'Todos os tipos de pele', 'Limpa profundamente'],
    image: 'https://images.unsplash.com/photo-1584305574293-b7b2c0a74f86?w=500'
  },
  {
    id: 29,
    name: 'Celestial Bloom Gel de Banho',
    code: '1564031',
    category: 'bodycare',
    price: 8200,
    volume: '500ml',
    description: 'Gel de banho com violetas cósmicas e aroma de framboesa.',
    features: ['Violetas cósmicas', 'Framboesa', 'Espuma cremosa', '500ml'],
    image: 'https://images.unsplash.com/photo-1556228841-3e0e5da4ce8e?w=500',
    new: true
  },

  // Girls Rule Collection
  {
    id: 30,
    name: '#Girls Rule Gel de Banho',
    code: '1514156',
    category: 'bodycare',
    price: 4600,
    volume: '250ml',
    description: 'Combinação de chá verde e verbena que traz leveza e frescor.',
    features: ['Chá verde', 'Verbena', 'Frescor', 'Atitude'],
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500'
  },
  {
    id: 31,
    name: '#Girls Rule Loção Corporal',
    code: '1514158',
    category: 'bodycare',
    price: 4600,
    volume: '250ml',
    description: 'Loção corporal com chá verde e verbena para pele suave.',
    features: ['Chá verde', 'Verbena', 'Hidratante', 'Atitude'],
    image: 'https://images.unsplash.com/photo-1556228578-dd6c8e2b08f4?w=500'
  },
  {
    id: 32,
    name: '#Girls Rule Body Mist',
    code: '1514157',
    category: 'fragrance',
    price: 4600,
    volume: '100ml',
    description: 'Body mist refrescante com chá verde e verbena.',
    features: ['Chá verde', 'Verbena', 'Refrescante', 'Leve'],
    image: 'https://images.unsplash.com/photo-1556228578-0b16b6e6d5e0?w=500'
  },

  // Facial Depilatory
  {
    id: 33,
    name: 'Creme Depilatório Facial Avon Works',
    code: '3997900',
    category: 'skincare',
    price: 3400,
    volume: '15ml',
    description: 'Creme depilatório facial para pele sensível com aloe vera.',
    features: ['Pele sensível', 'Aloe vera', '2,5 minutos', 'Calmante'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500'
  },

  // Foot Care
  {
    id: 34,
    name: 'Esfoliante Foot Scrub',
    code: '1542717',
    category: 'bodycare',
    price: 5000,
    volume: '75ml',
    description: 'Esfoliante para os pés com coco e lima para renovar a pele.',
    features: ['Esfoliante', 'Coco', 'Lima', 'Renova pele'],
    image: 'https://images.unsplash.com/photo-1622796430805-c0d81c55e8d3?w=500'
  },
  {
    id: 35,
    name: 'Foot Spray Refrescante',
    code: '1542493',
    category: 'bodycare',
    price: 6600,
    volume: '100ml',
    description: 'Spray refrescante para os pés com coco e lima.',
    features: ['Refrescante', 'Coco', 'Lima', 'Desodorante'],
    image: 'https://images.unsplash.com/photo-1556228578-dd6c8e2b08f4?w=500'
  },

  // Hair Care
  {
    id: 36,
    name: 'Curling Creme de Pentear',
    code: '1542614',
    category: 'haircare',
    price: 5200,
    volume: '150ml',
    description: 'Creme de pentear para definir cachos e controlar frizz.',
    features: ['Define cachos', 'Controla frizz', 'Sem enxágue', 'Hidratante'],
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500'
  },
  {
    id: 37,
    name: 'Avon Care Men 3 em 1',
    code: '1380774',
    category: 'haircare',
    price: 5800,
    volume: '90gr',
    description: 'Shampoo, condicionador e gel de banho masculino 3 em 1.',
    features: ['3 em 1', 'Masculino', 'Praticidade', 'Essential'],
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=500'
  },

  // Home & Aromatics
  {
    id: 38,
    name: 'Vela Time for Energy',
    code: '1537575',
    category: 'home',
    price: 10800,
    volume: '250g',
    description: 'Vela aromática com toranja, limão e hortelã-pimenta para energizar.',
    features: ['Toranja', 'Limão', 'Hortelã-pimenta', 'Energizante'],
    image: 'https://images.unsplash.com/photo-1602874801006-bf093c8b2b35?w=500'
  },
  {
    id: 39,
    name: 'Difusor Time for Energy',
    code: '1537573',
    category: 'home',
    price: 12800,
    volume: '70ml',
    description: 'Difusor aromático para energizar corpo e mente.',
    features: ['Toranja', 'Limão', 'Hortelã', 'Dura até 6 semanas'],
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500'
  },
  {
    id: 40,
    name: 'Vela Time for Focus',
    code: '1496512',
    category: 'home',
    price: 10800,
    volume: '250g',
    description: 'Vela aromática com manjericão, alecrim e pimenta preta para foco.',
    features: ['Manjericão', 'Alecrim', 'Pimenta preta', 'Concentração'],
    image: 'https://images.unsplash.com/photo-1598662957007-e2da6f6e4c43?w=500'
  },
  {
    id: 41,
    name: 'Vela Papillon',
    code: '1495063',
    category: 'home',
    price: 10800,
    volume: '250g',
    description: 'Vela aromática decorativa com design de borboletas.',
    features: ['Design exclusivo', 'Aromática', 'Decorativa', 'Borboletas'],
    image: 'https://images.unsplash.com/photo-1602874801006-bf093c8b2b35?w=500'
  },
  {
    id: 42,
    name: 'Difusor Papillon',
    code: '1495062',
    category: 'home',
    price: 17800,
    volume: '100ml',
    description: 'Difusor aromático decorativo com design de borboletas.',
    features: ['Design exclusivo', 'Aromático', 'Decorativo', 'Dura até 8 semanas'],
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500'
  },
  {
    id: 43,
    name: 'Vela Breast Cancer',
    code: '1488707',
    category: 'home',
    price: 9200,
    volume: '200g',
    description: 'Vela aromática em apoio à causa do cancro da mama.',
    features: ['Causa social', 'Aromática', 'Design especial', 'Solidária'],
    image: 'https://images.unsplash.com/photo-1602874801006-bf093c8b2b35?w=500'
  },
  {
    id: 44,
    name: 'Difusor Vanilla & Tonka Bean',
    code: '1500348',
    category: 'home',
    price: 10800,
    volume: '70ml',
    description: 'Difusor aromático com baunilha e fava tonka.',
    features: ['Baunilha', 'Tonka Bean', 'Doce', 'Dura até 6 semanas'],
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500'
  },
  {
    id: 45,
    name: 'Vela Lavender & Bergamot',
    code: '1500359',
    category: 'home',
    price: 8500,
    volume: '200g',
    description: 'Vela aromática relaxante com lavanda e bergamota.',
    features: ['Lavanda', 'Bergamota', 'Relaxante', 'Queima até 30h'],
    image: 'https://images.unsplash.com/photo-1602874801006-bf093c8b2b35?w=500'
  },
  {
    id: 46,
    name: 'Difusor para Carro Lavender & Bergamot',
    code: '1500364',
    category: 'home',
    price: 6500,
    volume: '5ml',
    description: 'Difusor aromático para carro com lavanda e bergamota.',
    features: ['Para carro', 'Lavanda', 'Bergamota', 'Refil'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'
  },
  {
    id: 47,
    name: 'Vela Patchouli & Spice',
    code: '1544946',
    category: 'home',
    price: 11500,
    volume: '250g',
    description: 'Vela aromática com patchouli, almíscar preto e baunilha de Madagascar.',
    features: ['Patchouli', 'Almíscar', 'Baunilha', 'Sofisticada'],
    image: 'https://images.unsplash.com/photo-1602874801006-bf093c8b2b35?w=500'
  },

  // Gift Sets
  {
    id: 48,
    name: 'Gift Set Exxtravert Lash & Brow',
    code: '1528434',
    category: 'giftsets',
    price: 20500,
    description: 'Set presente com máscara de pestanas e lápis de sobrancelhas.',
    includes: ['Máscara Lash Genius', 'Lápis Glimmerstick Brow'],
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=500'
  },
  {
    id: 49,
    name: 'Gift Set Planet Spa',
    code: '1550670',
    category: 'giftsets',
    price: 16800,
    description: 'Set presente de spa com creme de mãos e máscara de sono.',
    includes: ['Creme de Mãos', 'Máscara de Sono', 'Bolsa'],
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500'
  },
  {
    id: 50,
    name: 'Gift Set Pur Blanca Para Ela',
    code: '1549954',
    category: 'giftsets',
    price: 16400,
    description: 'Set presente com perfume e loção corporal Pur Blanca.',
    includes: ['EDT 50ml', 'Loção Corporal 150ml'],
    image: 'https://images.unsplash.com/photo-1549662387-c1d0f4c0d6c9?w=500',
    featured: true
  },
  {
    id: 51,
    name: 'Gift Set Far Away Original',
    code: '1553084',
    category: 'giftsets',
    price: 42800,
    description: 'Set presente luxuoso Far Away com perfume, creme corporal e rollerball.',
    includes: ['EDP 50ml', 'Creme Corporal', 'Rollerball 10ml'],
    image: 'https://images.unsplash.com/photo-1610457017996-4e501d0e328b?w=500',
    featured: true
  },
  {
    id: 52,
    name: 'Gift Set Full Speed Para Ele',
    code: '1549953',
    category: 'giftsets',
    price: 28800,
    description: 'Set presente masculino Full Speed com EDT, desodorizante e gel de banho.',
    includes: ['EDT 75ml', 'Desodorizante Roll-on', 'Gel de Banho'],
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500',
    featured: true
  },
  {
    id: 53,
    name: 'Gift Set Far Away Glamour',
    code: '1551618',
    category: 'giftsets',
    price: 39800,
    description: 'Set presente Far Away Glamour com EDP, loção corporal e rollerball.',
    includes: ['EDP 50ml', 'Loção Corporal', 'Rollerball 10ml'],
    image: 'https://images.unsplash.com/photo-1549662387-c1d0f4c0d6c9?w=500'
  },
  {
    id: 54,
    name: 'Gift Set Far Away Beyond The Moon',
    code: '1552744',
    category: 'giftsets',
    price: 38600,
    description: 'Set presente Far Away Beyond The Moon com creme corporal e pérola de banho.',
    includes: ['Creme Corporal', 'Pérola de Banho'],
    image: 'https://images.unsplash.com/photo-1610457017996-4e501d0e328b?w=500'
  },
  {
    id: 55,
    name: 'Gift Set Advance Techniques Shine',
    code: '1553122',
    category: 'giftsets',
    price: 31800,
    description: 'Set presente capilar com shampoo, máscara, sérum e escova.',
    includes: ['Shampoo', 'Máscara', 'Sérum', 'Escova Paddle'],
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500',
    featured: true
  },
  {
    id: 56,
    name: 'Gift Set Ultra Gloss',
    code: '1549696',
    category: 'giftsets',
    price: 28500,
    description: 'Set presente de maquilhagem com glosses labiais ultra brilhantes.',
    includes: ['3x Lip Gloss Ultra Colour'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'
  },
  {
    id: 57,
    name: 'Gift Set Lash Genius',
    code: '1525653',
    category: 'giftsets',
    price: 20800,
    description: 'Set presente com máscara de pestanas e lápis de olhos.',
    includes: ['Máscara Lash Genius', 'Lápis Glimmerstick'],
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500'
  }
];

// Helper functions
export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(p => p.category === categoryId);
};
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getNewProducts = () => products.filter(p => p.new);
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.code.includes(query)
  );
};

// Format price to Angolan Kwanza
export const formatPrice = (price) => {
  return `${price.toLocaleString('pt-AO')} KZ`;
};

// WhatsApp message helper
export const generateWhatsAppMessage = (product, quantity = 1) => {
  const message = `Olá Fatima! 👋

Gostaria de encomendar:

📦 *Produto:* ${product.name}
🔢 *Código:* ${product.code}
💰 *Preço:* ${formatPrice(product.price)}
📊 *Quantidade:* ${quantity}
💵 *Total:* ${formatPrice(product.price * quantity)}

Aguardo confirmação. Obrigado! 🌸`;
  
  return encodeURIComponent(message);
};

export const whatsappNumber = '244923456789'; // Replace with actual number