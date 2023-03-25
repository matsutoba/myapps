import { EventInput } from '@fullcalendar/core'
import { atom } from 'recoil'

export const modalsAtom = atom<{
  isTaskModalOpened: boolean
  currentTaskId: string | null
}>({
  key: 'modals',
  default: {
    isTaskModalOpened: false,
    currentTaskId: null,
  },
})

export const eventsAtom = atom<EventInput[]>({
  key: 'events',
  default: [
    { id: '1', title: 'イベント１２３', start: '2023-03-01' },
    {
      id: '2',
      title: 'イベント１２３',
      start: '2023-03-02T00:00:00',
      end: '2023-03-02T08:00:00',
    },
    {
      id: '3',
      title: 'イベント１２３',
      start: '2023-03-01T00:00:00',
      end: '2023-03-01T08:00:00',
    },
    { id: '4', title: 'イベント１２３', start: '2023-03-01' },
    { id: '5', title: 'イベント１２３', start: '2023-03-15' },
    {
      id: '6',
      title: 'イベント１２３',
      start: '2023-03-24T00:00:00',
      end: '2023-03-24T20:00:00',
    },
    {
      id: '7',
      title: '名称未設定',
      start: '2023-03-25T17:00:00',
      end: '2023-03-25T20:00:00',
    },
  ],
})
