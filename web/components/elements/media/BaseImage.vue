<template>
	<img
		:src="placeholderSrc"
		:data-src="imageSrc"
		:data-srcset="imageSrcSet"
		:data-sizes="dataSizes"
		:data-parent-fit="parentFit"
		:alt="altText"
		:width="cropWidth"
		:height="cropHeight"
		:style="objectPositionStyle"
		:class="[orientation, { lazypreload: preload }]"
		class="lazyload"
		@lazyloaded="$emit('lazyloaded')"
	/>
</template>

<script>
export default {
	props: {
		image: {
			type: Object,
			default: () => undefined,
		},
		svgPlaceholder: {
			type: Boolean,
			default: () => false,
		},
		lqipPlaceholder: {
			type: Boolean,
			default: () => false,
		},
		dataSizes: {
			type: String,
			default: () => 'auto',
		},
		parentFit: {
			type: String,
			default: () => '',
		},
		alt: {
			type: String,
			default: 'Missing alternative text',
		},
		auto: {
			default: 'format',
			type: String,
		},
		fit: {
			default: 'max',
			type: String,
		},
		preload: {
			type: Boolean,
			default: () => false,
		},
		useObjectPosition: {
			type: Boolean,
			default: () => false,
		},
	},
	computed: {
		placeholderSrc() {
			return this.svgPlaceholder
				? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${this.cropWidth} ${this.cropHeight}'%3E%3Crect width='${this.cropWidth}' height='${this.cropHeight}' fill='rgb(230,230,230)' /%3E%3C/svg%3E`
				: this.lqipPlaceholder &&
				  this.image &&
				  this.image.asset &&
				  this.image.asset.metadata
				? this.image.asset.metadata.lqip
				: ''
		},
		imageSrc() {
			return this.$builder
				.image(this.image)
				.width(1000)
				.auto(this.auto)
				.fit(this.fit)
		},
		imageSrcSet() {
			let srcSet = ''
			const widths = [250, 375, 500, 750, 1000, 1400, 2000, 3000]

			widths.forEach((width, index) => {
				srcSet +=
					this.$builder
						.image(this.image)
						.width(width)
						.auto(this.auto)
						.fit(this.fit) + ` ${width}w`
				if (index + 1 !== widths.length) {
					srcSet += ','
				}
				srcSet += ' '
			})
			return srcSet
		},
		cropWidth() {
			if (!this.image) {
				return undefined
			}
			const originalWidth = this.image.asset.metadata.dimensions.width
			const cropLeft = this.image.crop ? this.image.crop.left : 0
			const cropRight = this.image.crop ? this.image.crop.right : 0
			return (
				originalWidth -
				cropLeft * originalWidth -
				cropRight * originalWidth
			)
		},
		cropHeight() {
			if (!this.image) {
				return undefined
			}
			const originalHeight = this.image.asset.metadata.dimensions.height
			const cropTop = this.image.crop ? this.image.crop.top : 0
			const cropBottom = this.image.crop ? this.image.crop.bottom : 0
			return (
				originalHeight -
				cropTop * originalHeight -
				cropBottom * originalHeight
			)
		},
		orientation() {
			if (this.cropWidth && this.cropHeight) {
				if (this.cropWidth > this.cropHeight) {
					return 'landscape'
				} else if (this.cropWidth < this.cropHeight) {
					return 'portrait'
				} else {
					return 'square'
				}
			} else {
				return 'undefined'
			}
		},
		altText() {
			return this.image && this.image.alt ? this.image.alt : this.alt
		},
		objectPositionStyle() {
			return this.useObjectPosition && this.image && this.image.hotspot
				? {
						'object-position': `${[
							this.image.hotspot.x,
							this.image.hotspot.y,
						]
							.map((value) => `${(value * 100).toFixed(2)}%`)
							.join(' ')}`,
				  }
				: undefined
		},
	},
}
</script>

<style scoped>
.lazyload,
.lazyloading {
	opacity: 0;
}

.lazyloaded {
	opacity: 1;
	transition: opacity 0.75s;
}
</style>
