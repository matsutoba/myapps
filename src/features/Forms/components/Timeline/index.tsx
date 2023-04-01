import React, { useRef, useEffect, useMemo } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import styled from 'styled-components'
import { DateInput, EventClickArg, EventDropArg } from '@fullcalendar/core'
import interactionPlugin from '@fullcalendar/interaction'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { eventsAtom, modalsAtom } from '../../modules/atoms'
import { eventsSelector, modalsSelector } from '../../modules/selectors'
import { dateEqual, getFormatedDateTime } from '../../services/date_service'
import dayjs from 'dayjs'

const Wrapper = styled.div`
  width: 400px;
  thead {
    display: none;
  }
  & .fc-toolbar-chunk {
    display: none;
  }
  & .fc-toolbar.fc-header-toolbar {
    margin: 0;
  }
  & .fc-event-main {
    color: #000000;
  }
  & .fc-h-event,
  .fc-v-event {
    background-color: #b0c4de;
    border: 1px solid #b0c4de;
    &:hover {
      opacity: 0.85;
    }
  }
`

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  & > button {
    background-color: #2c3e50;
    border: 1px solid #2c3e50;
    color: #ffffff;
    padding: 8px 8px;
    border-radius: 4px;
    margin-bottom: 8px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`

export const Timeline: React.FC<{
  current: DateInput | null
}> = ({ current }) => {
  const ref = useRef<FullCalendar>(null)
  const currentTime = new Date().toLocaleTimeString()
  const setModals = useSetRecoilState(modalsAtom)
  const modalsState = useRecoilValue(modalsSelector)
  const setEvents = useSetRecoilState(eventsAtom)
  const { events } = useRecoilValue(eventsSelector)

  const currentEvents = useMemo(() => {
    if (!current) return []
    const e = events.filter((event) => {
      return dateEqual(event.start, current)
    })
    return e
  }, [current, events])

  useEffect(() => {
    if (!ref.current || !current) return
    ref.current.getApi().gotoDate(current)
  }, [current])

  return (
    <Wrapper>
      <Control>
        <span>
          {current ? dayjs(current as Date).format('YYYY年MM月DD日') : ''}
        </span>
        <button
          onClick={() => {
            const start = new Date(current as Date)
            start.setHours(new Date().getHours())
            start.setMinutes(Math.floor(start.getMinutes() / 15) * 15)
            const end = new Date(current as Date)
            end.setMinutes(start.getMinutes())
            end.setHours(start.getHours() + 1)
            console.log('T', start, end)
            setEvents([
              ...events,
              {
                id: `${events.length + 1}`,
                title: '名称未設定',
                start: getFormatedDateTime(start),
                end: getFormatedDateTime(end),
              },
            ])
          }}
        >
          新しい予定
        </button>
      </Control>
      <FullCalendar
        ref={ref}
        plugins={[timeGridPlugin, interactionPlugin]}
        timeZone="local"
        initialView="timeGridDay"
        locale="ja"
        nowIndicator={true}
        buttonText={{
          today: '今日',
          month: '月',
          list: 'リスト',
        }}
        allDayText="終日"
        height={400}
        initialDate={current || undefined}
        scrollTime={`${currentTime}Z`}
        selectable
        editable
        events={currentEvents}
        eventDrop={(arg: EventDropArg) => {
          // イベントのドラッグ終了時
          setEvents(
            events.map((e) => {
              if (e.id === arg.event.id && arg.event.start && arg.event.end) {
                return { ...e, start: arg.event.start, end: arg.event.end }
              } else {
                return e
              }
            }),
          )
        }}
        eventClick={(arg: EventClickArg) => {
          setModals({
            ...modalsState,
            isTaskModalOpened: true,
            currentTaskId: arg.event.id,
          })
        }}
        snapDuration="00:15"
      />
    </Wrapper>
  )
}
