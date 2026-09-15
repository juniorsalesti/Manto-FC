import { Product } from '../types';

// Imagens geradas e otimizadas em estúdio
import heroImage from '../assets/images/hero_sports_jerseys_1789066049973.jpg';
import detailImage from '../assets/images/jersey_texture_detail_1789066061932.jpg';
import nbaPurpleImg from '../assets/images/nba_purple_jersey_1789066072555.jpg';
import nbaYellowImg from '../assets/images/nba_yellow_jersey_1789066116945.jpg';
import soccerBlackImg from '../assets/images/soccer_clean_jersey_1789066082797.jpg';
import soccerWhiteImg from '../assets/images/soccer_white_jersey_1789066127738.jpg';

export { heroImage, detailImage };

/**
 * CATÁLOGO DE PRODUTOS
 * 
 * O vendedor pode facilmente:
 * 1. Alterar os nomes dos modelos
 * 2. Mudar a categoria ('Futebol', 'NBA' ou 'Premium')
 * 3. Mudar a versão ('Torcedor', 'Jogador' ou 'Tailandesa 1.1')
 * 4. Substituir as URLs das imagens ou adicionar novos produtos à lista
 */
export const PRODUCTS: Product[] = [
  {
    id: 'lakers-purple',
    name: 'Camisa Lakers — Roxa',
    category: 'NBA',
    version: 'Torcedor',
    description: 'Edição tradicional roxa com detalhes em amarelo ouro. Tecido leve em micro-mesh e acabamento clássico.',
    image: nbaPurpleImg,
    badge: 'Mais Pedida',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    fabric: 'Tecido Dri-FIT respirável',
    details: [
      'Gola V canelada reforçada',
      'Laterais em mesh para circulação de ar',
      'Estampa e numeração termoaplicadas em alta precisão'
    ],
    featured: true
  },
  {
    id: 'lakers-yellow',
    name: 'Camisa Lakers — Amarela',
    category: 'NBA',
    version: 'Torcedor',
    description: 'Manto clássico dourado com faixas laterais em roxo nobre. Conforto e caimento solto para o dia a dia.',
    image: nbaYellowImg,
    badge: 'Destaque',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    fabric: 'Poliéster 100% respirável',
    details: [
      'Cores vibrantes resistentes a lavagens',
      'Caimento padrão torcedor mais confortável',
      'Etiqueta de autenticidade aplicada na barra'
    ],
    featured: true
  },
  {
    id: 'nba-player-version',
    name: 'Camisa NBA — Player Version',
    category: 'NBA',
    version: 'Jogador',
    description: 'Padrão idêntico ao usado pelos atletas em quadra. Corte atlético ajustado e máxima absorção de suor.',
    image: nbaPurpleImg,
    badge: 'Edição Atleta',
    sizes: ['P', 'M', 'G', 'GG'],
    fabric: 'VaporKnit / AeroReady Pro',
    details: [
      'Corte aerodinâmico slim fit',
      'Costuras termosseladas ultra leves',
      'Patch da liga e logos com relevo emborrachado'
    ],
    featured: true
  },
  {
    id: 'futebol-torcedor',
    name: 'Camisa Futebol — Torcedor',
    category: 'Futebol',
    version: 'Torcedor',
    description: 'Camisa clássica com corte reto e escudo bordado de alta definição. Perfeita para usar na torcida e no lazer.',
    image: soccerWhiteImg,
    badge: 'Clássica',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    fabric: 'Tecido Dry-Tech anti-odor',
    details: [
      'Escudo com bordado de alta densidade',
      'Gola reforçada com fita interna protetora',
      'Secagem ultra rápida'
    ],
    featured: true
  },
  {
    id: 'futebol-player',
    name: 'Camisa Futebol — Player',
    category: 'Futebol',
    version: 'Jogador',
    description: 'Mesmo modelo utilizado em campo. Tecido de alta compressão e escudos termoaplicados ultraleves.',
    image: soccerBlackImg,
    badge: 'Uso em Campo',
    sizes: ['P', 'M', 'G', 'GG'],
    fabric: 'Microfibra técnica respirável',
    details: [
      'Escudo e patrocínios em silicone termofixo',
      'Caimento atlético sob medida ao corpo',
      'Painéis perfurados a laser nas áreas de maior calor'
    ],
    featured: true
  },
  {
    id: 'tailandesa-premium',
    name: 'Camisa Tailandesa 1.1',
    category: 'Premium',
    version: 'Tailandesa 1.1',
    description: 'Nível máximo de fidelidade aos modelos oficiais. Acabamento artesanal, toque macio e caimento impecável.',
    image: soccerBlackImg,
    badge: 'Padrão 1.1',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    fabric: 'Tecido premium com tecnologia antimicrobiana',
    details: [
      'Acabamento 1.1 com etiquetas e selos idênticos',
      'Toque macio e sedoso sem transparência',
      'Costuras duplas reforçadas nas mangas e bainha'
    ],
    featured: true
  },
  {
    id: 'real-madrid-1-1',
    name: 'Camisa Real Madrid — Tailandesa 1.1',
    category: 'Futebol',
    version: 'Tailandesa 1.1',
    description: 'Acabamento primoroso na cor branca imaculada com detalhes em dourado nobre. Detalhes imperceptíveis.',
    image: soccerWhiteImg,
    badge: 'Tailandesa 1.1',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    fabric: 'Poliéster Reciclado Premium',
    details: [
      'Escudo do clube com detalhes holográficos',
      'Tecido com textura jacquard sutil',
      'Corte elegante e moderno'
    ]
  },
  {
    id: 'chicago-bulls-vintage',
    name: 'Camisa NBA Bulls — Classic',
    category: 'NBA',
    version: 'Torcedor',
    description: 'Design lendário do basquete americano. Tecido microperfurado nostálgico com alta durabilidade.',
    image: nbaPurpleImg,
    badge: 'Clássico NBA',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    fabric: 'Mesh esportivo respirável',
    details: [
      'Listras caneladas na gola e cavas',
      'Letras e números com aplicação reforçada',
      'Etiqueta Mitchell & Ness / Hardwood Classics style'
    ]
  },
  {
    id: 'futebol-black-player',
    name: 'Camisa All Black — Player Edition',
    category: 'Futebol',
    version: 'Jogador',
    description: 'Visual monocromático sofisticado com tecido fosco de alta absorção e detalhes reflexivos sutis.',
    image: soccerBlackImg,
    badge: 'Player Tech',
    sizes: ['P', 'M', 'G', 'GG'],
    fabric: 'Tecnologia Ultra-Fit Compressão',
    details: [
      'Design blackout exclusivo',
      'Ventilação dinâmica nas costas e axilas',
      'Toque ultra leve: pesa menos de 140g'
    ]
  }
];
