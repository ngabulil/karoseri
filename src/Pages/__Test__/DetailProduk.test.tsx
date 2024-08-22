import { it, expect, describe, vi } from 'vitest'
import { render  } from '@testing-library/react'
import DetailProduk from '../DetailProduk'

vi.mock("react-router-dom", () => ({
    useParams: () => ({
        id: 1
    })
}))
vi.mock("../../Context/DetailContext", () => ({
    UseDetailContext: () => ({
        detail: {
            name: "test"
        },
        getDetail: vi.fn()
    }),
}))
vi.mock("../../Components/produk/list produk")
vi.mock("../../Context/ProductContext", () => ({
    UseProductContext: () => ({
        getRecommededProducts: vi.fn()
    })
}))

describe('DetailProduk', () => {
    it('should render DetailProduk', () => {
        const component = render(<DetailProduk />)
        expect(component).toBeTruthy()
    })
})