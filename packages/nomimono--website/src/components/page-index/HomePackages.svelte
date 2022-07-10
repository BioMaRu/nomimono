<script>
	let active = 0
	const activeClass = 'nm-card _dp-f _pst-rlt _tst-2'
	const inactiveClass = 'nm-card _dp-f _pst-rlt _bgcl-tpr _bdcl-content _bdcl-opacity-10 _bgcl-content\:hover _tst-2 _cs-pt _bgcl-opacity-5'

	function selectItem (n) {
		active = n
	}
</script>

<section class="lo-container _pdv-11 _bgcl-base-200">
	<div class="_fw-600 _fs-4 _cl-primary">Packages</div>
	<div class="_fw-800 _fs-9 _mgt-5">
		Move faster with confident
	</div>

	<div class="lo-6 _g-8 _mgt-6">
		<div class="lo-12 _g-6 _mgt-6">
			<div class="{active === 0 ? activeClass : inactiveClass}" on:click={() => selectItem(0)}>
				<div class="_fs-9 _w-10 _cl-negative">
					<i class="fa-brands fa-css3-alt"></i>
				</div>
				<div class="lo-12 _jtfit-st _f-1">
					<div class="_fw-600">Nomimono CSS</div>
					<p class="_fs-3 _cl-content _cl-opacity-60 _mgt-3">Core Nomimono CSS library</p>
					<a class="nm-link" href="/">
						<div class="_mgt-4 _fw-600 _fs-3">Read more</div>
					</a>
				</div>
			</div>

			<div class="{active === 1 ? activeClass : inactiveClass}" on:click={() => selectItem(1)}>
				<div class="_fs-8 _w-10 _cl-primary">
					<i class="fa-solid fa-palette"></i>
				</div>
				<div class="lo-12 _jtfit-st _f-1">
					<div class="_fw-600">Nomimono Theme</div>
					<p class="_fs-3 _cl-content _cl-opacity-60 _mgt-3">Collection of customizable themes</p>
					<a class="nm-link" href="/">
						<div class="_mgt-4 _fw-600 _fs-3">Read more</div>
					</a>
				</div>
			</div>

			<div class="{active === 2 ? activeClass : inactiveClass}" on:click={() => selectItem(2)}>
				<div class="_fs-9 _w-10 _cl-info">
					<i class="fa-brands fa-react"></i>
				</div>
				<div class="lo-12 _jtfit-st _f-1">
					<div class="_fw-600">Nomimono React</div>
					<p class="_fs-3 _cl-content _cl-opacity-60 _mgt-3">React component implementation of Nomimono</p>
					<a class="nm-link" href="/">
						<div class="_mgt-4 _fw-600 _fs-3">Read more</div>
					</a>
				</div>
				<div class="nm-badge _pst-asl _t-5 _r-5">
					Soon
				</div>
			</div>
		</div>

		<div>
			WIP
		</div>
	</div>
</section>
