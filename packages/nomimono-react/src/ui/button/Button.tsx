import './Button.scss'
import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { IButtonConst } from './type'

export const BUTTON = {
	size: {
		small: 'small',
		medium: 'medium',
		large: 'large',
	},
	variant: {
		primary: 'primary',
		secondary: 'secondary',
		tertiary: 'tertiary',
		ghost: 'ghost',
		positive: 'positive',
		negative: 'negative',
	},
} as IButtonConst

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'positive' | 'negative'
	startIconClass?: string
	endIconClass?: string
	isLoading?: boolean
	isFluid?: boolean
	isPill?: boolean
	disabled?: boolean
	children?: ReactNode
}

export function Button(props: ButtonProps) {
	const {
		size,
		variant,
		startIconClass,
		endIconClass,
		isLoading,
		isFluid,
		isPill,
		children,
		...buttonProps
	} = props

	return (
		<button
			{...buttonProps}
			className={classNames('nm-button', props?.className, {
				'is-size-small': props.size === BUTTON.size.small,
				'is-size-medium': props.size === BUTTON.size.medium,
				'is-size-large': props.size === BUTTON.size.large,
				'is-variant-primary': props.variant === BUTTON.variant.primary,
				'is-variant-secondary': props.variant === BUTTON.variant.secondary,
				'is-variant-tertiary': props.variant === BUTTON.variant.tertiary,
				'is-variant-ghost': props.variant === BUTTON.variant.ghost,
				'is-variant-positive': props.variant === BUTTON.variant.positive,
				'is-variant-negative': props.variant === BUTTON.variant.negative,
				'is-loading': props.isLoading,
				'is-fluid': props.isFluid,
				'is-pill': props.isPill,
			})}
		>
			{props.startIconClass && (
				<span className={'start-icon'}>
					<i className={`${props.startIconClass}`}></i>
				</span>
			)}
			<span>{props.children}</span>
			{props.endIconClass && (
				<span className={'end-icon'}>
					<i className={`${props.endIconClass}`}></i>
				</span>
			)}
		</button>
	)
}

export default Button
