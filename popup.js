
document.getElementById('pickTitleBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true}, (tab) => {
        const currentTitle = tab[0].title;

        document.getElementById('title-box').textContent = currentTitle;
    })
})

