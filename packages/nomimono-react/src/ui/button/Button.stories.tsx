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
	parameters: {
		docs: {
			description: {
				component: dedent`
					<div
						class="_bdrd-8px _pdh-32px _pdt-32px _bgs-cv _bgpst-tl" 
						style="height: 80px; background-image: url(/images/story-bg.png);"
					> 
						<h1 class="_fs-900 _fw-600">Button</h1>
					</div>
					<h2 class="_fs-600 _fw-600 _mgt-32px">Overview</h2>
					<p class="_lh-165pct" style="font-size: 16px;">
						<code>Button</code> allow users to trigger an action or event with a single click. <br> 
						All <code>ButtonHTMLAttributes</code> can be used as a Props too (eg. title, type).</p>
				`,
			},
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
				 import { Button, BUTTON } from '@nomimono/nomimono-react'
				 
				 <Button size={BUTTON.size.small}>Button</Button>
				 <Button size={BUTTON.size.medium}>Button</Button>
				 <Button size={BUTTON.size.large}>Button</Button>
				 
				 /* or */
				 <Button size={'S'}>Button</Button>
				 <Button size={'M'}>Button</Button>
				 <Button size={'L'}>Button</Button>
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
				import { Button, BUTTON } from '@nomimono/nomimono-react'
				
				<Button variant={BUTTON.variant.primary}>Primary</Button>
				<Button variant={BUTTON.variant.secondary}>Secondary</Button>
				<Button variant={BUTTON.variant.tertiary}>Tertiary</Button>
				<Button variant={BUTTON.variant.negative}>Negative</Button>
				<Button variant={BUTTON.variant.positive}>Positive</Button>
				
				/* or */
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
		<Button isLoading size={'S'}>
			Loading
		</Button>
		<Button isLoading variant={'positive'}>
			Loading
		</Button>
		<Button isLoading variant={'negative'} size={'L'}>
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
				import { Button } from '@nomimono/nomimono-react'
				
				<Button isLoading size={'S'}>Loading</Button>
				<Button isLoading variant={'positive'}>Loading</Button>
				<Button isLoading variant={'negative'} size={'L'}>Loading</Button>
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
				import { Button } from '@nomimono/nomimono-react'
				
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
		<Button isPill>Disabled</Button>
		<Button isFluid variant={'secondary'} className={'_mgt-12px'}>
			Disabled
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
				import { Button } from '@nomimono/nomimono-react'
				
				<Button isPill>Pill button</Button>
				<Button isFluid variant={'secondary'}>Fluid button</Button>
		  `,
		},
	},
}
