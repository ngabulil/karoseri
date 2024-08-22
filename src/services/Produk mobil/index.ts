import { getRequest } from "../api"

const getAllMobil = async (params?: any) => {
    try {
        const response = await getRequest('/mobil', params)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

export { getAllMobil }