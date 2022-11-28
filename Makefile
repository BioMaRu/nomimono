#==============================
# {libs} nomimono-theme
#==============================
build-nomimono-theme:
	nx run nomimono-theme:build

patch-nomimono-theme:
	nx run nomimono-theme:version \
		--releaseAs=patch \
		--push=true \
		--skipRootChangelog=true \
		--skipProjectChangelog=true \

publish-nomimono-theme:
	nx run nomimono-theme:publish

zpatch-nomimono-theme:
	make build-nomimono-theme && make patch-nomimono-theme && make publish-nomimono-theme

#==============================
# {libs} nomimono-css
#==============================
build-nomimono-css:
	nx run nomimono-css:build

patch-nomimono-css:
	nx run nomimono-css:version \
		--releaseAs=patch \
		--push=true \
		--skipRootChangelog=true \
		--skipProjectChangelog=true \

publish-nomimono-css:
	nx run nomimono-css:publish

prepare-nomimono-css:
	nx run nomimono-css:prepare

zpatch-nomimono-css:
	make build-nomimono-css && make prepare-nomimono-css && make patch-nomimono-css && make publish-nomimono-css

#==============================
# storybook
#==============================
serve-storybook:
	nx run nomimono-react:storybook

build-storybook:
	nx run nomimono-react:build-storybook

dev-website:
	nx run nomimono--website:dev


build-website:
	nx run nomimono--website:build
