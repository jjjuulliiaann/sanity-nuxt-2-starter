<template>
	<transition name="slide">
		<section v-show="!$store.state.cookies.isAccepted" class="cookienote">
			<div class="cookienote__content text-01 blockcontent">
				<ElementsTextBlock
					:blocks="$store.state.siteOptions.cookieText"
				/>
				<button
					class="cookieconsent__button actionbutton"
					@click="closeNotice"
				>
					{{ $store.state.siteOptions.cookieButton }}
				</button>
			</div>
		</section>
	</transition>
</template>

<script>
export default {
	computed: {
		cookiesAccepted() {
			return this.$cookies.get('cookie_status') === 'accepted'
		},
	},

	mounted() {
		// check if open
		if (!this.cookiesAccepted) {
			this.$store.commit('setCookiesAccepted', false)
		}
	},

	methods: {
		closeNotice() {
			this.$store.commit('setCookiesAccepted', true)

			// set cookie
			this.$cookies.set('cookie_status', 'accepted', 60 * 60 * 24 * 365)
		},
	},
}
</script>

<style scoped>
@import '~/styles/variables';

.cookienote {
	position: relative;
	width: 100%;
	max-height: 200px;
	background: rgb(var(--clr-black) / 0.1);
	z-index: 1000;
	overflow: hidden;
}

.cookienote__content {
	position: relative;
	padding: 1rem;

	@media (--width-tablet-01) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width: 1600px) {
		justify-content: flex-start;
	}
}

.cookienote__content >>> p {
	margin: 0;
}

.cookieconsent__button {
	position: relative;
	font-weight: 700;
	margin-top: 1rem;

	@media (--width-tablet-01) {
		margin-top: 0;
	}
}

@media (hover: hover) and (pointer: fine) {
	.cookieconsent__button:hover {
		color: rgb(var(--clr-accent));
	}
}

/* transitions ----------------------------------- */

.slide-enter-active,
.slide-leave-active {
	transition: max-height 0.5s ease-out;
}
.slide-enter,
.slide-leave-to {
	max-height: 0;
}
</style>
