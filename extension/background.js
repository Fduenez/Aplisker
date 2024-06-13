

const pattern = "https://www.linkedin.com/jobs/*/?currentJobId=*"

const filter = {
    urls: [pattern],
};

console.log("in background")

console.log("Listener is not registered for tabs.onUpdated event");
browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    console.log("in listener")
    console.log(`status: ${changeInfo.status}`)
    let stat = await changeInfo.status;
    if (stat === 'complete' && changeInfo.url) {
        // Execute your content script on the updated tab
        try{
            const response = await browser.scripting.executeScript({
                target: {
                    tabId: tab.id,
                    allFrames: true,
                },
                files: ["content-scripts.js"],
            });
            console.log(response)
        }catch(e){
            console.log(e);
        }

    }
}, filter);



