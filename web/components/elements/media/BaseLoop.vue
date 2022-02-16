<template>
	<video
		ref="video"
		class="video-loop"
		:class="{ 'video--playing': playing }"
		muted
		autoplay
		playsinline
		loop
		preload="auto"
		:width="assetWidth"
		:height="assetHeight"
		crossorigin="anonymous"
		@canplay="updatePaused"
		@playing="updatePaused"
		@pause="updatePaused"
	></video>
</template>

<script>
import Hls from 'hls.js'

export default {
	data() {
		return {
			videoPlayer: {},
			playing: null,
			isLoaded: false,
		}
	},

	props: {
		video: {
			type: Object,
			required: true,
		},
	},

	computed: {
		assetWidth() {
			return this.video.muxVideo &&
				this.video.muxVideo.asset &&
				this.video.muxVideo.asset.data
				? this.video.muxVideo.asset.data.tracks[0].max_width
				: ''
		},
		assetHeight() {
			return this.video.muxVideo &&
				this.video.muxVideo.asset &&
				this.video.muxVideo.asset.data
				? this.video.muxVideo.asset.data.tracks[0].max_height
				: ''
		},
	},

	methods: {
		setupVideo() {
			if (!this.video.muxVideo.asset || !this.video.muxVideo.asset.data) {
				return false
			}
			const stream = `https://stream.mux.com/${this.video.muxVideo.asset.playbackId}.m3u8`
			const video = this.$refs.video

			if (Hls.isSupported()) {
				const hls = new Hls()
				hls.loadSource(stream)
				hls.attachMedia(video)
			} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
				video.src = stream
			}
		},

		updatePaused(event) {
			this.playing = !event.target.paused
			if (!this.isLoaded) {
				this.isLoaded = true
				this.$emit('loaded')
			}
		},
	},

	mounted() {
		console.log(this.video)
		this.setupVideo()
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

.video-loop {
	position: relative;
}

.video-loop > video {
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
