chrome.webNavigation.onCompleted.addListener(
  (details) => {
    console.log(details);
    if (details.url) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["content.js"],
      });
    }
  },
  {
    url: [
      {
        urlMatches:
          "https://smartstore.naver.com/golfspot_official/products/6063896626",
      },
    ],
  }
);
