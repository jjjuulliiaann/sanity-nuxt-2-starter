<template>
	<PortableText :blocks="blocks" :serializers="serializers" />
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import BaseFigure from '~/components/elements/media/BaseFigure'
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
					image: BaseFigure,
					blockImage: BaseFigure,
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
