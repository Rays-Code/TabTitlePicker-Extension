
---

```
# 🧩 Chrome Extension — Auto-Fetch Tab Title

A simple Chrome Extension that displays the **title of the current active tab** inside the popup when a button is clicked.

---

## 🚀 Features
- Popup with a clean UI  
- A button to fetch the active tab’s title  
- Automatically grabs the current tab title using Chrome Extensions API  
- Displays the title instantly inside the popup  

---

## 📂 Project Structure
```

chrome-tab-title-extension/
│── manifest.json
│── popup.html
│── popup.js
│── icons/
│     └── icon.png

````
---

## 🛠️ How It Works
1. User clicks the **"Pick Title"** button in the popup.  
2. `chrome.tabs.query` fetches the active tab.  
3. The extension extracts the tab title (`tab[0].title`).  
4. The title is displayed in the popup UI.

---

## 📜 Example Code

### **popup.js**
```js
document.getElementById('pickTitleBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
        const currentTitle = tab[0].title;
        document.getElementById('title-box').textContent = currentTitle;
    });
});
````

---

## 🧪 Installation (Load Extension Locally)

1. Clone this repository
2. Open **Chrome → Extensions**
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select this project folder

Your extension will now appear in Chrome.

---

## 💡 Future Enhancements

* Auto-fetch title without needing a button
* Copy title to clipboard
* Improved popup UI/UX

---

## 📄 License

MIT License

```

---
```
