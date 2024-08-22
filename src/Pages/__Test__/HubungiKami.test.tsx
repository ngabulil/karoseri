import { render } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import HubungiKami from '../HubungiKami'

describe('HubungiKami', () => {
    it('should render', () => {
        const component = render(<HubungiKami />)
        expect(component).toBeTruthy()
    })
})