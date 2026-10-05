import type { Creator } from './creator'

export interface HeroPortrait {
  creator: Creator
  number: string
  placement: 'foreground' | 'background'
}
