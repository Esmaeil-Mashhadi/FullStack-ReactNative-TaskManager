import { object, ref, string } from "yup";

const formSchema = object().shape({
    email:string().email('Email is not valid'),
    password:string().min(6).max(12),
    confirm: string().oneOf([ref('password')], 'Passwords must match'),
})


export default formSchema