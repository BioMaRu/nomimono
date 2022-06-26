<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta content="Svelte demo app" name="description" />
</svelte:head>

<section class="hero _bgcl-neutral-100 _pdt-32px">
	<div class="_dp-f _gg-48px _pd-24px">

<!--		<div class="nomi-panel _pdh-32px _pdv-12px">-->
<!--			Hello-->
<!--			<div class="nomi-panel level-100 _pdh-32px _pdv-12px">-->
<!--				Hello 100-->
<!--				<div class="nomi-panel level-200 _pdh-32px _pdv-12px">-->
<!--					Hello 200-->
<!--					<div class="nomi-panel level-300 _pdh-32px _pdv-12px">-->
<!--						Hello 300-->
<!--						<div class="nomi-panel level-400 _pdh-32px _pdv-12px">-->
<!--							Hello 400-->
<!--							<div class="nomi-panel level-500 _pdh-32px _pdv-12px">-->
<!--								Hello 500-->
<!--								<div class="nomi-panel level-600 _pdh-32px _pdv-12px">-->
<!--									Hello 600-->
<!--									<div class="nomi-panel level-700 _pdh-32px _pdv-12px">-->
<!--										Hello 700-->
<!--										<div class="nomi-panel level-800 _pdh-32px _pdv-12px">-->
<!--											Hello 800-->
<!--											<div class="nomi-panel level-900 _pdh-32px _pdv-12px">-->
<!--												Hello 900-->
<!--											</div>-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
	</div>
</section>

<style lang="scss">
	.hero {
		height: 500px;
	}
</style>
