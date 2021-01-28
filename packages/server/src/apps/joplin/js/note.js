function addPluginAssets(appBaseUrl, assets) {
	if (!assets) return;

	const pluginAssetsContainer = document.getElementById('joplin-container-pluginAssetsContainer');

	for (let i = 0; i < assets.length; i++) {
		const asset = assets[i];

		if (asset.mime === 'application/javascript') {
			const script = document.createElement('script');
			script.src = `${appBaseUrl}/${asset.path}`;
			pluginAssetsContainer.appendChild(script);
		} else if (asset.mime === 'text/css') {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = `${appBaseUrl}/${asset.path}`;
			pluginAssetsContainer.appendChild(link);
		}
	}
}

function docReady(fn) {
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		setTimeout(fn, 1);
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

docReady(() => {
	// eslint-disable-next-line no-undef
	addPluginAssets(joplinNoteViewer.appBaseUrl, joplinNoteViewer.pluginAssets);
});
