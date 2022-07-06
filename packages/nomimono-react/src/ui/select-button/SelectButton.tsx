import './SelectButton.scss'
import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { ISelectButtonConst } from './type'

export const SELECT_BUTTON = {
	size: {
		small: 'small',
		medium: 'medium',
		large: 'large',
	},
} as ISelectButtonConst

export interface SelectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'small' | 'medium' | 'large'
	isActive?: boolean
	disabled?: boolean
	children?: ReactNode
}

export function SelectButton(props: SelectButtonProps) {
	const { isActive, children, ...restProps } = props

	return (
		<button
			{...restProps}
			className={classNames('nm-select-button', props?.className, {
				'is-size-small': props.size === SELECT_BUTTON.size.small,
				'is-size-medium': props.size === SELECT_BUTTON.size.medium,
				'is-size-large': props.size === SELECT_BUTTON.size.large,
				'is-active': props.isActive,
			})}
		>
			<div>{props.children}</div>
		</button>
	)
}

export default SelectButton
