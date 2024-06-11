export const useUser = () => useState('user', () => ({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
}))
