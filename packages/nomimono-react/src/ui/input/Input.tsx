import './Input.scss'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { IInputConst } from './type'

export const INPUT = {
	size: {
		small: 'small',
		medium: 'medium',
		large: 'large',
	},
	variant: {
		primary: 'primary',
		positive: 'positive',
		negative: 'negative',
	},
} as IInputConst

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	id?: string
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'positive' | 'negative'
	label?: string | ReactNode
	info?: string | ReactNode
	children?: ReactNode
	disabled?: boolean
}

export function Input(props: InputProps) {
	const { size, variant, label, info, children, ...rest } = props

	return (
		<div
			className={classNames('nomi-field', {
				'is-size-small': props.size === INPUT.size.small,
				'is-size-medium': props.size === INPUT.size.medium,
				'is-size-large': props.size === INPUT.size.large,
				'is-variant-negative': props.variant === INPUT.variant.negative,
				'is-variant-positive': props.variant === INPUT.variant.positive,
				'is-disabled': props.disabled,
			})}
		>
			{!!props.label && <label htmlFor={props?.id}>{props.label}</label>}
			<div className="nomi-input">
				<input id={props?.id} placeholder={'Placeholder'} {...rest} />
			</div>
			{!!props.info && <div className={'info'}>{props.info}</div>}
		</div>
	)
}

export default Input
