var ampscheme = [
    '*://www.google.com/amp/*'
];

function isampcache(url) {
    var pattern = /.*www\.google\.com\/amp\/s\/.*/i;
    var pattern2 = /.*www\.google\.com\/amp\/.*/i;
    if(url.match(pattern))
        return true
    else if (url.match(pattern2))
        return true
    else
        return false
}

function deampify(url) {
    var redirection;
    var pattern_s = /www\.google\.com\/amp\/s\//i;
    var pattern_i = /www\.google\.com\/amp\//i;
    if(url.match(pattern_s))
        redirection = url.replace(pattern_s, "")
    else if(url.match(pattern_i)) {
        redirection = url.replace(pattern_i, "")
        redirection = redirection.replace("https", "http")
    }
    return redirection
}

function redirector(requestDetails) {
    var url = requestDetails.url;
    var redirection = deampify(url)
    console.log("[noampthx] redirecting " + url + " to " + redirection + "...")

    return {
        redirectUrl: redirection.toString()
    };
}

console.log("[noampthx] Loading redirector...")

browser.webRequest.onBeforeRequest.addListener(
    redirector,
    {urls: ampscheme},
    ["blocking"]
);

browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    console.log("[noampthx] history update to: " + details.url)
    console.log("[noampthx] details: " + JSON.stringify(details))
    if(isampcache(details.url)) {
        var newurl = deampify(details.url)
        console.log("[noampthx] redirecting to: " + newurl)
        browser.tabs.update(details.tabId, {url:newurl})
    }
}, {url:[{hostContains: ".google.com"}]
})
