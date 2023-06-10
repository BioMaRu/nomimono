import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps, BUTTON } from './Button'
import React from 'react'
import dedent from 'ts-dedent'

/** =====================
 *  Component Overview
 ===================== */
export default {
	component: Button,
	title: 'Buttons/Button',
	argTypes: {
		startIconClass: {
			description: 'example try: <i>"far fa-info-circle"</i>',
		},
		endIconClass: {
			description: 'example try: <i>"far fa-arrow-right"</i>',
		},
	},
	parameters: {
		docs: {
			description: {
				component: dedent`
					<div
						class="_bdrd-8px _pdh-32px _dp-f _alit-ct _bgs-cv _bgpst-tl"
						style="height: 100px; background-image: url(/images/header-bg.png);"
					>
						<h1 class="_fs-1000 _fw-600 _mg-0px">Button</h1>
					</div>
					<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
					<p class="_lh-165pct" style="font-size: 16px;">
						<code>&lt;Button /&gt;</code> allow users to trigger an action or event with a single click. <br>
						All <code>ButtonHTMLAttributes</code> can be used as a Props too (eg. title, type).</p>
				`,
			},
		},
		actions: { argTypesRegex: '^on' },
		cssprops: {
			'button-border-radius': { value: '4px' },
			'button-font-weight': { value: '600' },
			'button-font-family': { value: 'var(--ffml-primary)', control: 'text' },

			'button-small-height': { value: '28px' },
			'button-small-font-size': { value: '13px' },
			'button-medium-height': { value: '40px' },
			'button-medium-font-size': { value: '15px' },
			'button-large-height': { value: '48px' },
			'button-large-font-size': { value: '18px' },
		},
	},
} as Meta

const TemplateOverview: Story<ButtonProps> = args => <Button {...args}>{args.children}</Button>
export const _1Overview = TemplateOverview.bind({})
_1Overview.storyName = 'Overview'
_1Overview.args = {
	children: 'Button',
}

/** =====================
 *  Size
 ===================== */
const TemplateSize: Story<ButtonProps> = args => (
	<>
		<Button size={BUTTON.size.small}>Button</Button>
		<Button size={BUTTON.size.medium}>Button</Button>
		<Button size={BUTTON.size.large}>Button</Button>
	</>
)

export const _2Size = TemplateSize.bind({})
_2Size.storyName = 'Size'
_2Size.decorators = [
	Story => <div className={'lo-grid-span-horizontal _gg-16px _alit-ct'}>{Story()}</div>,
]
_2Size.parameters = {
	docs: {
		description: {
			story: dedent`
				---
			`,
		},
		source: {
			state: 'open',
			code: dedent`
				 <Button size={'small'}>Button</Button>
				 <Button size={'medium'}>Button</Button>
				 <Button size={'large'}>Button</Button>
		  `,
		},
	},
}

/** =====================
 *  Variant
 ===================== */
const TemplateVariant: Story<ButtonProps> = args => (
	<>
		<Button variant={BUTTON.variant.primary}>Primary</Button>
		<Button variant={BUTTON.variant.secondary}>Secondary</Button>
		<Button variant={BUTTON.variant.tertiary}>Tertiary</Button>
		<Button variant={BUTTON.variant.negative}>Negative</Button>
		<Button variant={BUTTON.variant.positive}>Positive</Button>
	</>
)

export const _3Variant = TemplateVariant.bind({})
_3Variant.storyName = 'Variant'
_3Variant.decorators = [
	Story => <div className={'lo-grid-span-horizontal _gg-16px _alit-ct'}>{Story()}</div>,
]
_3Variant.parameters = {
	docs: {
		description: {
			story: dedent`
				---
			`,
		},
		source: {
			state: 'open',
			code: dedent`
				<Button variant={'primary'}>Primary</Button>
				<Button variant={'secondary'}>Secondary</Button>
				<Button variant={'tertiary'}>Tertiary</Button>
				<Button variant={'negative'}>Negative</Button>
				<Button variant={'positive'}>Positive</Button>
		  `,
		},
	},
}

/** =====================
 *  Loading
 ===================== */
const TemplateLoading: Story<ButtonProps> = args => (
	<>
		<Button isLoading size={'small'}>
			Loading
		</Button>
		<Button isLoading variant={'positive'}>
			Loading
		</Button>
		<Button isLoading variant={'negative'} size={'large'}>
			Loading
		</Button>
		<Button isLoading variant={'secondary'}>
			Loading
		</Button>
		<Button isLoading variant={'tertiary'}>
			Loading
		</Button>
	</>
)

export const _4Loading = TemplateLoading.bind({})
_4Loading.storyName = 'Loading'
_4Loading.decorators = [
	Story => <div className={'lo-grid-span-horizontal _gg-16px _alit-ct'}>{Story()}</div>,
]
_4Loading.parameters = {
	docs: {
		description: {
			story: dedent`
				---
			`,
		},
		source: {
			state: 'open',
			code: dedent`
				<Button isLoading size={'small'}>Loading</Button>
				<Button isLoading variant={'positive'}>Loading</Button>
				<Button isLoading variant={'negative'} size={'large'}>Loading</Button>
				<Button isLoading variant={'secondary'}>Loading</Button>
				<Button isLoading variant={'tertiary'}>Loading</Button>
		  `,
		},
	},
}

/** =====================
 *  Disabled
 ===================== */
const TemplateDisabled: Story<ButtonProps> = args => (
	<>
		<Button disabled>Disabled</Button>
		<Button disabled variant={'secondary'}>
			Disabled
		</Button>
		<Button disabled variant={'tertiary'}>
			Disabled
		</Button>
		<Button isLoading disabled>
			Disabled
		</Button>
		<Button isLoading disabled variant={'secondary'}>
			Disabled
		</Button>
	</>
)

export const _5Disabled = TemplateDisabled.bind({})
_5Disabled.storyName = 'Disabled'
_5Disabled.decorators = [
	Story => <div className={'lo-grid-span-horizontal _gg-16px _alit-ct'}>{Story()}</div>,
]
_5Disabled.parameters = {
	docs: {
		description: {
			story: dedent`
				---
			`,
		},
		source: {
			state: 'open',
			code: dedent`
				<Button disabled>Disabled</Button>
				<Button disabled variant={'secondary'}>Disabled</Button>
				<Button disabled variant={'tertiary'}>Disabled</Button>
				<Button isLoading disabled>Disabled</Button>
				<Button isLoading disabled variant={'secondary'}>Disabled</Button>
		  `,
		},
	},
}

/** =====================
 *  Misc
 ===================== */
const TemplateMisc: Story<ButtonProps> = args => (
	<>
		<Button isPill>Pill button</Button>
		<Button isFluid variant={'secondary'} className={'_mgt-12px'}>
			Fluid button
		</Button>
	</>
)

export const _6Misc = TemplateMisc.bind({})
_6Misc.storyName = 'Misc.'
_6Misc.decorators = [Story => <div className={''}>{Story()}</div>]
_6Misc.parameters = {
	docs: {
		description: {
			story: dedent`
				---
			`,
		},
		source: {
			state: 'open',
			code: dedent`
				<Button isPill>Pill button</Button>
				<Button isFluid variant={'secondary'}>Fluid button</Button>
		  `,
		},
	},
}

/** =====================
 *  Css Variable
 ===================== */
// const TemplateCSSVar: Story = () => (
// 	<>
// 		<table className={'nm-table'}>
// 			<thead>
// 				<tr>
// 					<td>aa</td>
// 					<td>aa</td>
// 					<td>aa</td>
// 				</tr>
// 			</thead>
// 			<tbody>
// 				<tr>
// 					<td>aa</td>
// 					<td>aa</td>
// 					<td>aa</td>
// 				</tr>
// 			</tbody>
// 		</table>
// 	</>
// )
//
// export const _990CssVar = TemplateCSSVar.bind({})
// _990CssVar.storyName = 'CSS Variable'
// _990CssVar.parameters = {
// 	docs: {
// 		description: {
// 			story: dedent`
// 				---
// 			`,
// 		},
// 		source: {
// 			code: null,
// 		},
// 	},
// }
