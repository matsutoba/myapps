import React, { useEffect, useMemo } from 'react'
import { Modal } from '../common/Modal'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { eventsSelector, modalsSelector } from '../../modules/selectors'
import { eventsAtom, modalsAtom } from '../../modules/atoms'
import styled from 'styled-components'
import { useFormik } from 'formik'
import dayjs from 'dayjs'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FormTitle = styled.div`
  font-size: rem;
  color: #666;
  font-weight: 700;
  margin-bottom: 8px;
`

const Row = styled.div`
  margin-bottom: 16px;
  font-size: 1rem;
  & p {
    line-height: 1.2rem;
  }
`

const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 8px;
`

export const TaskModal: React.FC = () => {
  const modalsState = useRecoilValue(modalsSelector)
  const { events } = useRecoilValue(eventsSelector)
  const setModals = useSetRecoilState(modalsAtom)
  const setEvents = useSetRecoilState(eventsAtom)

  interface FormType {
    title: string | null
    start: Date | null
    end: Date | null
  }

  const formik = useFormik<FormType>({
    initialValues: {
      title: '',
      start: null,
      end: null,
    },
    onSubmit: async (values) => {},
  })

  const event = useMemo(() => {
    return events.find((e) => e.id === modalsState.currentTaskId)
  }, [modalsState.currentTaskId])

  useEffect(() => {
    if (!event) return
    formik.setFieldValue('title', event.title)
    formik.setFieldValue('start', event.start)
    formik.setFieldValue('end', event.end)
  }, [modalsState.currentTaskId])

  return (
    <Modal
      title="予定の追加"
      open={modalsState.isTaskModalOpened}
      onCancel={() => {
        setModals({ ...modalsState, isTaskModalOpened: false })
      }}
      onExecute={() => {
        if (!event) return
        setEvents(
          events.map((e) => {
            if (e.id === event.id) {
              return { ...e, title: formik.values.title || '' }
            }
            return e
          }),
        )
        setModals({ ...modalsState, isTaskModalOpened: false })
      }}
    >
      <Wrapper>
        <Row>
          <FormTitle>日時</FormTitle>
          <p>
            開始：{dayjs(formik.values.start).format('YYYY年MM月DD日 HH:mm:ss')}
          </p>
          <p>
            終了：{dayjs(formik.values.end).format('YYYY年MM月DD日 HH:mm:ss')}
          </p>
        </Row>
        <Row>
          <FormTitle>件名</FormTitle>
          <FormInput
            type="text"
            name="title"
            value={formik.values.title || ''}
            autoFocus
            onChange={formik.handleChange}
          />
        </Row>
      </Wrapper>
    </Modal>
  )
}
