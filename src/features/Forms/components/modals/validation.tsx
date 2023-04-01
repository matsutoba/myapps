import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required('件名は必須です')
    .max(40, '件名は40文字までで入力してください'),
})
