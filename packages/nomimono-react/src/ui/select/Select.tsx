import './Select.scss'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { ISelectConst } from './type'

export const SELECT = {
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
} as ISelectConst

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
	id?: string
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'positive' | 'negative'
	label?: string | ReactNode
	info?: string | ReactNode
	defaultValue?: string
	children?: ReactNode
	disabled?: boolean
}

export function Select(props: SelectProps) {
	const { size, variant, label, info, children, ...selectProps } = props

	return (
		<div
			className={classNames('nomi-field', {
				'is-size-small': props.size === SELECT.size.small,
				'is-size-medium': props.size === SELECT.size.medium,
				'is-size-large': props.size === SELECT.size.large,
				'is-variant-negative': props.variant === SELECT.variant.negative,
				'is-variant-positive': props.variant === SELECT.variant.positive,
				'is-disabled': props.disabled,
			})}
		>
			{!!props.label && <label htmlFor={props.id}>{props.label}</label>}
			<div className={classNames('nomi-select', {})}>
				<select {...selectProps} className={classNames(props?.className, {})}>
					{props.children}
				</select>
			</div>
			{!!props.info && <div className={'info'}>{props.info}</div>}
		</div>
	)
}

export default Select
