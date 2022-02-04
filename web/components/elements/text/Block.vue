<template>
	<PortableText :blocks="blocks" :serializers="serializers" />
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import SanityFigure from '~/components/elements/media/SanityFigure'
import BlockText from '~/components/elements/blocks/BlockText'
import Link from '~/components/elements/text/Link'
import FileLink from '~/components/elements/text/FileLink'

export default {
	components: {
		PortableText,
	},

	props: {
		blocks: {
			type: Array,
			default: () => [],
			required: true,
		},
	},

	data() {
		return {
			serializers: {
				types: {
					image: SanityFigure,
					blockImage: SanityFigure,
					block: BlockText,
				},
				marks: {
					link: Link,
					download: FileLink,
				},
				styles: {
					normal: 'p',
					small: 'span',
				},
			},
		}
	},
}
</script>
