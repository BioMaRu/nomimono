import styles from './SelectButton.module.scss'
import classNames from 'classnames'
import React from 'react'
import { ISelectButtonConst } from './type'

export const SELECT_BUTTON = {
	size: {
		small: 'S',
		medium: 'M',
		large: 'L',
	},
} as ISelectButtonConst

export interface SelectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'S' | 'M' | 'L'
	isActive?: boolean
	disabled?: boolean
	children?: React.ReactNode
}

export function SelectButton(props: SelectButtonProps) {
	return (
		<button
			{...props}
			className={classNames(styles['select-button'], props?.className, {
				[styles['is-size-s']]: props.size === SELECT_BUTTON.size.small,
				[styles['is-size-m']]: props.size === SELECT_BUTTON.size.medium,
				[styles['is-size-l']]: props.size === SELECT_BUTTON.size.large,
				[styles['is-active']]: props.isActive,
			})}
		>
			<div>{props.children}</div>
		</button>
	)
}

export default SelectButton
