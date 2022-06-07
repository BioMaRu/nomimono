import { render } from '@testing-library/react'

import Checkbok from './Checkbox'

describe('Checkbok', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Checkbok />)
		expect(baseElement).toBeTruthy()
	})
})
