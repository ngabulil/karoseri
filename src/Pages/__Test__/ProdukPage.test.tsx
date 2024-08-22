import { render } from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import Produk from '../Produk'

vi.mock("../../Components/produk/HeaderWrap")
vi.mock("../../Components/produk/Content")

describe("Produk", () => {
    it("should render Produk", () => {
        const component = render(<Produk />)
        expect(component).toBeTruthy()
    })
})