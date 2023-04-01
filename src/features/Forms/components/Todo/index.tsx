import React, { useState, useEffect, useMemo } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { EventMountArg } from '@fullcalendar/core'
import styled from 'styled-components'
import { EventInput } from '@fullcalendar/core'
import { dateEqual, getFormatedDate } from '../../services/date_service'
import { Timeline } from '../Timeline'
import { Modal } from '../common/Modal'
import { TaskModal } from '../modals/TaskModal'
import { useRecoilValue } from 'recoil'
import { eventsSelector } from '../../modules/selectors'

const Wrapper = styled.div`
  display: flex;
`

const CalendarWrapper = styled.div`
  width: 30%;
  min-width: 300px;
  height: 420px;
  margin-right: 16px;

  & .fc-toolbar-title {
    font-size: 1em;
  }

  & .fc-daygrid-day-frame:hover {
    opacity: 0.32;
    cursor: pointer;
  }
  & .fc-daygrid-event-harness {
    // DayGridに表示されるイベントを非表示にする
    display: none;
  }

  & .fc {
    & .fc-bg-event {
      background: transparent;
    }
    & .fc-toolbar.fc-header-toolbar {
      margin-bottom: 0.8em;
    }
    & .fc-button {
      font-size: 0.8em;
    }
    & table {
      font-size: 0.8em;
    }
    /*

    */
  }
`

export const Todo: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null)
  const { events } = useRecoilValue(eventsSelector)

  const handleClickDate = (e: DateClickArg): void => {
    setCurrentDate(e.date)
  }

  useEffect(() => {
    setCurrentDate(new Date())
  }, [])

  return (
    <>
      <Wrapper>
        <CalendarWrapper>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            timeZone="local"
            initialView="dayGridMonth"
            locale="ja"
            buttonText={{
              today: '今日',
              month: '月',
              list: 'リスト',
            }}
            selectable
            aspectRatio={1}
            dayCellContent={(day) => {
              return day.dayNumberText.replace('日', '')
            }}
            events={events}
            dateClick={handleClickDate}
            eventDidMount={(e: EventMountArg) => {
              const count = events.filter((ev) => {
                return dateEqual(ev.start, e.event.start)
              }).length
              if (count === 0) return

              let element = document
                .querySelector(
                  `[data-date="${getFormatedDate(e.event.start)}"]`,
                )
                ?.querySelector('.fc-daygrid-day-events')
              if (!element) return
              element.innerHTML = ReactDOMServer.renderToString(
                <>
                  <Counter count={count} />
                </>,
              )
            }}
          />
        </CalendarWrapper>
        <Timeline current={currentDate} />
      </Wrapper>
      <TaskModal />
    </>
  )
}

const CounterWrapper = styled.div`
  position: absolute;
  left: 4px;
  bottom: 0px;
  background: #b0c4de;
  color: #000000;
  padding: 4px 8px;
  border-radius: 4px;
`
const Counter: React.FC<{ count: number }> = ({ count }) => {
  return <CounterWrapper>{count}</CounterWrapper>
}
