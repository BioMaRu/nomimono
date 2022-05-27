import styles from './Button.module.scss'
import React from 'react'
import classNames from 'classnames'
import { IButtonConst } from './type'

export const BUTTON = {
	size: {
		small: 'S',
		medium: 'M',
		large: 'L',
	},
	variant: {
		primary: 'primary',
		secondary: 'secondary',
		tertiary: 'tertiary',
		positive: 'positive',
		negative: 'negative',
	},
} as IButtonConst

/* eslint-disable-next-line */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'S' | 'M' | 'L'
	variant?: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative'
	isLoading?: boolean
	isFluid?: boolean
	isPill?: boolean
	disabled?: boolean
	children?: React.ReactNode
}

export function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className={classNames(styles['button'], props?.className, {
				[styles['is-size-s']]: props.size === BUTTON.size.small,
				[styles['is-size-l']]: props.size === BUTTON.size.large,
				[styles['is-size-m']]: props.size === BUTTON.size.medium,
				[styles['is-variant-primary']]: props.variant === BUTTON.variant.primary,
				[styles['is-variant-secondary']]: props.variant === BUTTON.variant.secondary,
				[styles['is-variant-tertiary']]: props.variant === BUTTON.variant.tertiary,
				[styles['is-variant-positive']]: props.variant === BUTTON.variant.positive,
				[styles['is-variant-negative']]: props.variant === BUTTON.variant.negative,
				[styles['is-loading']]: props.isLoading,
				[styles['is-fluid']]: props.isFluid,
				[styles['is-pill']]: props.isPill,
			})}
		>
			<span>{props.children}</span>
		</button>
	)
}

export default Button
