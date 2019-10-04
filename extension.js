var directLink = "0wikipedia.org";

chrome.webRequest.onBeforeRequest.addListener(function(director) {
        var newUrl = director.url.replace("wikipedia.org", directLink);
        return {redirectUrl: newUrl};
   },
   {
       urls: [ "*://*.wikipedia.org/*"], types: ["main_frame", "sub_frame", "other"]
    }, 
    ["blocking"]
);