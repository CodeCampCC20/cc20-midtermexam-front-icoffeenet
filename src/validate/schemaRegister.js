import * as Yup from "yup"

export const schemaRegister = Yup.object({
    username: Yup.string().max(30).required('Please enter your username.'),
    password: Yup.string().max(20).required('please enter your password.'),
    confirmPassword: Yup.string().max(20).required('please enter your password.')
})

export const schemaLogin = Yup.object({
    username: Yup.string().max(30).required('Please enter your username.'),
    password: Yup.string().max(20).required('please enter your password.')
})