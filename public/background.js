chrome.action.onClicked.addListener( async (tab) => {

    const currentWindow = await chrome.windows.getCurrent();
    const screenInfo = await chrome.system.display.getInfo();

    // Update currentr window
    chrome.windows.update(currentWindow.id, {
        state: "normal",
        height: Math.round((screenInfo[0].bounds.height)),
        width: Math.round((screenInfo[0].bounds.width/2)),
        left: 0,
        top: 0,
        focused: true,
    });

    // Create new window
    chrome.windows.create({
        url: "https://stirring-madeleine-e034a2.netlify.app/",
        type: "popup",
        height: Math.round((screenInfo[0].bounds.height)),
        width: Math.round((screenInfo[0].bounds.width/2)),
        left: Math.round((screenInfo[0].bounds.width/2) - 10),
        top: 0,
        focused: true,
    });
});