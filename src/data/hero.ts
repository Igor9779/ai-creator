import { creatorsById } from './creators'
import type { HeroPortrait } from '../types/personality'

export const heroPortraits: readonly HeroPortrait[] = [
  {
    creator: creatorsById.alex,
    number: '01',
    placement: 'background',
  },
  {
    creator: creatorsById.luna,
    number: '03',
    placement: 'foreground',
  },
]

export const heroEditionLabel = heroPortraits.map((portrait) => portrait.number.padStart(3, '0')).join(' / ')
