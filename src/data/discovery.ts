import { creatorsById } from './creators'
import type { Creator } from '../types/creator'

export interface DiscoveryItem {
  creator: Creator
  number: string
  layout: 'featured' | 'supporting' | 'portrait' | 'wide'
  imagePosition: string
}

export const discoveryItems: readonly DiscoveryItem[] = [
  { creator: creatorsById.alex, number: '01', layout: 'featured', imagePosition: '50% 35%' },
  { creator: creatorsById.ryan, number: '02', layout: 'supporting', imagePosition: '50% 25%' },
  { creator: creatorsById.luna, number: '03', layout: 'portrait', imagePosition: '50% 25%' },
  { creator: creatorsById.mia, number: '04', layout: 'wide', imagePosition: '50% 25%' },
]
