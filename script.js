function openLink() {
    let url = document.getElementById('urlInput').value;

    if (url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        hiddenHeaderAndTitle(url)
        overlayIframe()
        expandMainTag()
    }
}

function hiddenHeaderAndTitle(url) {
    document.getElementById('webView').src = url;
    document.getElementById('webView').style.display = 'block';
    document.getElementById('header').style.display = 'none';
    document.getElementById('title').style.display = 'none';
}

function overlayIframe() {

    document.getElementById('link-section').style.position = 'absolute';
    document.getElementById('link-section').style.zIndex = '1';
    document.getElementById('link-section').style.width = '100vw';
    document.getElementById('link-section').style.alignContent = 'center';

}

function expandMainTag() {
    document.getElementById('main').style.width = '100vw';
    document.getElementById('main').style.margin = '0';
}