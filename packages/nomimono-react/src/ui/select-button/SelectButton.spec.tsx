import { render } from '@testing-library/react'

import SelectButton from './SelectButton'

describe('SelectButton', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<SelectButton />)
		expect(baseElement).toBeTruthy()
	})
})
