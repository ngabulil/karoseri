import { render } from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import Perusahaan from '../Perusahaan'

vi.mock("react-router-dom", async () => ({
    useNavigate: vi.fn(),
    useLocation: () => ({ pathname: "/" }),
    Outlet: () => <div>Outlet</div>
}))
vi.mock("../../hooks/useWindowSize", () => ({
    default: () => [1, 2]
}))
vi.mock('../../Components/perusahaan/BoxPreview')
describe('Perusahaan', () => {
    it('should render', () => {
        const component = render(<Perusahaan />)
        expect(component).toBeTruthy()
    })
})