import './Tabs.scss'

import React, { ReactNode, ReactElement, useState, FC, useCallback } from 'react'
import classNames from 'classnames'

export interface TabsItemProps {
	id: string
	label: string
	labelIconClass?: string
	children: ReactNode
}

export interface TabsProps extends React.AllHTMLAttributes<HTMLDivElement> {
	defaultItemId?: string
	onActiveTabChange?: (activeId: string) => void
	children?: ReactElement<TabsItemProps>[]
}

export const Tabs: FC<TabsProps> & { Item: React.FC<TabsItemProps> } = (props: TabsProps) => {
	const defaultActive = props.defaultItemId || props?.children?.[0]?.props.id || ''
	const [activeId, setActiveId] = useState<string>(defaultActive)

	const handleActiveChange = useCallback(
		(id = '') => {
			setActiveId(id)
			props.onActiveTabChange?.(id)
		},
		[setActiveId, props],
	)

	return (
		<div className={'nomi-tabs'}>
			<div className={'tabs-menus'}>
				{props?.children?.map((it, idx) => (
					<button
						key={idx}
						onMouseDown={() => handleActiveChange(it?.props?.id)}
						className={classNames('tabs-button', {
							'is-active': activeId === it.props.id,
						})}
					>
						{it.props.labelIconClass && (
							<div className={'tabs-button-icon'}>
								<i className={it?.props.labelIconClass}></i>
							</div>
						)}
						<div>{it?.props.label}</div>
					</button>
				))}
			</div>
			<div className="tabs-contents">
				{props.children?.map(it => (
					<>{it.props.id === activeId && <div className="tabs-content">{it}</div>}</>
				))}
			</div>
		</div>
	)
}

export const TabsItem: FC<TabsItemProps> = props => {
	const { id, label, labelIconClass, children, ...restProps } = props

	return <div {...restProps}>{props.children}</div>
}

Tabs.Item = TabsItem

export default Tabs
