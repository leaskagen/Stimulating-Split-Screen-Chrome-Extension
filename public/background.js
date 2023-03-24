chrome.action.onClicked.addListener( async (tab) => {

    const currentWindow = await chrome.windows.getCurrent();
    const screenInfo = await chrome.system.display.getInfo();

    chrome.windows.update(currentWindow.id, {
        state: "normal",
        height: Math.round((screenInfo[0].bounds.height)),
        width: Math.round((screenInfo[0].bounds.width/2)),
        left: 0,
        top: 0,
        focused: true,
    });

    chrome.windows.create({
        url: "https://leaskagen.dev/",
        type: "popup",
        height: Math.round((screenInfo[0].bounds.height)),
        width: Math.round((screenInfo[0].bounds.width/2)),
        left: Math.round((screenInfo[0].bounds.width/2) - 10),
        top: 0,
        focused: true,
    });
});