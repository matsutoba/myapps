import { selector } from 'recoil'
import { eventsAtom, modalsAtom } from '../atoms'

export const modalsSelector = selector({
  key: 'modalsState',
  get: ({ get }) => {
    const modals = get(modalsAtom)
    return modals
  },
})

export const eventsSelector = selector({
  key: 'eventsState',
  get: ({ get }) => {
    const events = get(eventsAtom)
    return {
      events,
    }
  },
})
