// plugins/preview.client.js
export default function ({ query, enablePreview, $sanity }, inject) {
	if (query.preview) {
		$sanity.client = $sanity.preview
		$sanity.fetch = $sanity.preview.fetch
		inject('sanity', $sanity)
		enablePreview()
	}
}
