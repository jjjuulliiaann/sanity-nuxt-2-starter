<template>
	<nuxt-link
		v-if="props.linkType === 'internalLink'"
		:to="internalRoute"
		class="link"
	>
		<slot></slot>
	</nuxt-link>

	<a
		v-else
		:href="props.href"
		:target="props.blank ? '_blank' : '_self'"
		:rel="props.blank ? 'noopener' : ''"
		class="link"
	>
		<slot></slot>
	</a>
</template>

<script setup>
import { defineProps, computed, onMounted } from '@nuxtjs/composition-api'

const props = defineProps({
	linkType: {
		type: String,
		default: () => 'externalLink',
	},
	href: {
		type: String,
		default: () => '',
	},
	blank: {
		type: Boolean,
		default: () => false,
	},
	route: {
		type: String,
		default: () => '',
	},
	slug: {
		type: String,
		default: () => '',
	},
})

const internalRoute = computed(() => {
	return {
		name: props.route ?? 'index',
		params: props.slug ? { slug: props.slug } : {},
	}
})

onMounted(() => {
	console.log(props)
})
</script>
