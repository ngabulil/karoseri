import { deleteRequestWithToken, getRequest, postRequestWithToken, putRequestWithToken } from "../api"

const getTipeMobil = async (payload?: any) => {
    try {
        const response = await getRequest('/tipe-mobil', payload)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const createTipeMobil = async (payload: any) => {
    try {
        const response = await postRequestWithToken('/tipe-mobil', payload)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const updateTipeMobil = async (id: number, payload: any) => {
    try {
        const response = await putRequestWithToken(`/tipe-mobil/${id}`, payload)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const deleteTipeMobil = async (id: number) => {
    try {
        const response = await deleteRequestWithToken(`/tipe-mobil/${id}`)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

export { getTipeMobil, createTipeMobil, updateTipeMobil, deleteTipeMobil }