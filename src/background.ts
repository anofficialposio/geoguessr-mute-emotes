// ref: https://developer.chrome.com/docs/extensions/reference/api/runtime?hl=ja#event-onInstalled
chrome.runtime.onInstalled.addListener((details) => {
  console.log(JSON.stringify(details, null, 2))

  if (details?.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: "options.html"
    })
  }
})
