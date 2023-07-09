#==============================
# {libs} nomimono-theme
#==============================
build-nomimono-theme:
	npx nx run nomimono-theme:build

patch-nomimono-theme:
	npx nx run nomimono-theme:version \
		--releaseAs=patch \
		--push=true \
		--skipRootChangelog=true \
		--skipProjectChangelog=true \

publish-nomimono-theme:
	npx nx run nomimono-theme:publish

zpatch-nomimono-theme:
	make build-nomimono-theme && make patch-nomimono-theme && make publish-nomimono-theme

#==============================
# {libs} nomimono-css
#==============================
build-nomimono-css:
	npx nx run nomimono-css:build

patch-nomimono-css:
	npx nx run nomimono-css:version \
		--releaseAs=patch \
		--push=true \
		--skipRootChangelog=true \
		--skipProjectChangelog=true \

publish-nomimono-css:
	npx nx run nomimono-css:publish

prepare-nomimono-css:
	npx nx run nomimono-css:prepare

zpatch-nomimono-css:
	make build-nomimono-css && make patch-nomimono-css && make prepare-nomimono-css && make publish-nomimono-css


#==============================
# {libs} nomimono-svelte
#==============================
build-nomimono-svelte:
	npx nx run nomimono-svelte:build

patch-nomimono-svelte:
	npx nx run nomimono-svelte:version \
		--releaseAs=patch \
		--push=true \
		--skipRootChangelog=true \
		--skipProjectChangelog=true \

publish-nomimono-svelte:
	npx nx run nomimono-svelte:publish

zpatch-nomimono-svelte:
	make build-nomimono-svelte && make patch-nomimono-svelte && make publish-nomimono-svelte


#==============================
# {app} nomimono-css website
#==============================
dev-website:
	npx nx run nomimono--website:dev

build-website:
	npx nx run nomimono--website:build
