import React, { ReactNode, useState, FC } from 'react'
import './Tabs.scss'

/* eslint-disable-next-line */
export interface TabsProps {
	defaultActiveId?: string
	children?: ReactNode
}

export interface TabsItemProps {
	id?: string
	children?: ReactNode
}
// React.FC<TabsProps> & { Item: React.FC<TabsItemProps> }

export const Tabs: FC<TabsProps> & { Item: React.FC<TabsItemProps> } = (props: TabsProps) => {
	// const [activeTabId, setActiveTabId] = useState<string>('')
	//
	// const handleTabClick = React.useCallback(
	// 	(event: React.SyntheticEvent) => {
	// 		setActiveTabId(parseInt(event.currentTarget.getAttribute('data-tabs-index') || '', 10))
	// 	},
	// 	[setActiveTabId],
	// )

	return <div>{props.children}</div>
}

export const TabsItem: FC<TabsItemProps> = props => {
	return <div>{props.children}</div>
}

Tabs.Item = TabsItem

export default Tabs
