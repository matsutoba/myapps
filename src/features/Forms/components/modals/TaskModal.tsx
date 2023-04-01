import React, { useEffect, useMemo } from 'react'
import { Modal } from '../common/Modal'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { eventsSelector, modalsSelector } from '../../modules/selectors'
import { eventsAtom, modalsAtom } from '../../modules/atoms'
import styled from 'styled-components'
import { useFormik } from 'formik'
import dayjs from 'dayjs'
import { validationSchema } from './validation'

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

const Error = styled.div`
  color: #f00;
  padding-top: 8px;
  font-size: 0.8rem;
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
    validationSchema: validationSchema,
    onSubmit: async (values) => {},
  })

  const event = useMemo(() => {
    return events.find((e) => e.id === modalsState.currentTaskId)
  }, [events, modalsState.currentTaskId])

  useEffect(() => {
    if (!event || !modalsState.isTaskModalOpened) return
    formik.setFieldValue('title', event.title)
    formik.setFieldValue('start', event.start)
    formik.setFieldValue('end', event.end)
  }, [modalsState.isTaskModalOpened])

  if (!modalsState.isTaskModalOpened) return null

  return (
    <Modal
      title="予定の追加"
      open={modalsState.isTaskModalOpened}
      onCancel={() => {
        formik.resetForm()
        setModals({ ...modalsState, isTaskModalOpened: false })
      }}
      onExecute={() => {
        if (!event) return
        if (!formik.isValid) return
        console.log('E', formik.values)
        console.log('Events', events)
        console.log('Current', event)
        const newEvents = events.map((e) => {
          if (e.id === event.id) {
            return { ...e, title: formik.values.title || '' }
          }
          return e
        })
        console.log('newEvents', newEvents)
        setEvents(newEvents)
        formik.resetForm()
        setModals({ ...modalsState, isTaskModalOpened: false })
      }}
      isDisableExecute={!formik.isValid}
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
          <Error>{formik.errors.title}</Error>
        </Row>
      </Wrapper>
    </Modal>
  )
}
