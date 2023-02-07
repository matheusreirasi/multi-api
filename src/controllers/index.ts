import { IUser } from "../context/types"
import { Api } from "../services/api"

export const LoginRequest = async (username: string, password: string) => {

    try {
        const request = await Api.post('/login', {username, password})

        return request.data
    } catch (err) {
        return null
    }
}


export const setUserLocalStorage = (user: IUser | null) => {
    localStorage.setItem('u', JSON.stringify(user))
}


export const getUserLocalStorage = () => {
    const json = localStorage.getItem('u')

    if (!json) return null

    const user = JSON.parse(json)

    return user ?? null
}