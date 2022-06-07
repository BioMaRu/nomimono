import './Message.scss'
import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { IMessageConst } from './type'

export const MESSAGE = {
	variant: {
		primary: 'primary',
		positive: 'positive',
		negative: 'negative',
		warning: 'warning',
		info: 'info',
	},
} as IMessageConst

export interface MessageProps extends React.AllHTMLAttributes<HTMLDivElement> {
	variant?: 'primary' | 'positive' | 'negative' | 'warning' | 'info'
	children?: ReactNode
	iconClass?: string
	isShowClose?: boolean
	onClickClose?: Function
}

export function Message(props: MessageProps) {
	console.log(props.iconClass)
	return (
		<div
			className={classNames('nomi-message', props?.className, {
				'is-variant-primary': props.variant === MESSAGE.variant.primary,
				'is-variant-positive': props.variant === MESSAGE.variant.positive,
				'is-variant-negative': props.variant === MESSAGE.variant.negative,
				'is-variant-warning': props.variant === MESSAGE.variant.warning,
				'is-variant-info': props.variant === MESSAGE.variant.info,
				'is-show-close': props.isShowClose,
				'is-show-icon': !!props.iconClass,
			})}
		>
			{!!props.iconClass && (
				<div className={'icon'}>
					<i className={props.iconClass}></i>
				</div>
			)}

			<p>{props.children}</p>

			{props.isShowClose && (
				<div className={'close'} onClick={() => props.onClickClose?.()}></div>
			)}
		</div>
	)
}

export default Message

// import styles from './SelectButton.module.scss'
// import classNames from 'classnames'
// import React from 'react'
// import { ISelectButtonConst } from './type'
//
// export const SELECT_BUTTON = {
// 	size: {
// 		small: 'S',
// 		medium: 'M',
// 		large: 'L',
// 	},
// } as ISelectButtonConst
//
// export interface SelectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// 	size?: 'S' | 'M' | 'L'
// 	isActive?: boolean
// 	disabled?: boolean
// 	children?: React.ReactNode
// }
//
// export function SelectButton(props: SelectButtonProps) {
// 	return (
// 		<button
// 			{...props}
// 			className={classNames(styles['nomi-select-button'], props?.className, {
// 				[styles['is-size-s']]: props.size === SELECT_BUTTON.size.small,
// 				[styles['is-size-m']]: props.size === SELECT_BUTTON.size.medium,
// 				[styles['is-size-l']]: props.size === SELECT_BUTTON.size.large,
// 				[styles['is-active']]: props.isActive,
// 			})}
// 		>
// 			<div>{props.children}</div>
// 		</button>
// 	)
// }
//
// export default SelectButton
