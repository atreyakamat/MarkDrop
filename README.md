# 🔖 MarkDrop – A Simple Bookmark to TXT Exporter for Chrome

> Export all your Chrome bookmarks (including folder structure, titles, and URLs) into a clean, readable `.txt` file — with one click.

---

## 📚 Overview

**MarkDrop** is a lightweight Chrome extension that lets you back up or export your entire bookmarks collection in plain text format. Whether you're organizing links, sharing them, or just creating a quick backup, MarkDrop makes it effortless and fast.

---

## ⚙️ Features

- ✅ One-click export of all bookmarks  
- 📁 Maintains folder structure with indentation  
- 🔗 Includes bookmark titles and URLs  
- 💾 Downloads as a `.txt` file  
- 🔒 100% local – no data is sent anywhere  

---

## 🛠️ Installation & Setup

1. **Download or Clone this repository:**
   ```bash
   git clone https://github.com/atreyakamat/MarkDrop.git
    ```

2. **Open Google Chrome** and navigate to:

   ```
   chrome://extensions
   ```

3. **Enable Developer Mode** (toggle in the top right)

4. Click **"Load unpacked"** and select the folder where you cloned or downloaded the repo

5. The **MarkDrop** extension will now appear in your Chrome toolbar

---

## 🚀 How to Use

1. Click the **MarkDrop** icon in your Chrome toolbar
2. A popup will appear with a **“Extract Bookmarks”** button
3. Click the button and the extension will:

   * Traverse all your bookmarks
   * Format them with folder names and URLs
   * Download a `bookmarks.txt` file to your computer

---

### 📄 Example Output:

```
Bookmarks Bar
  Google
  - https://www.google.com
  Dev Stuff
    GitHub
    - https://github.com
```

---

## 📦 Folder Structure

```
markdrop/
├── manifest.json
├── popup.html
├── popup.js
└── README.md
```

---

## 🔐 Permissions Used

* `bookmarks`: To read all your saved bookmarks
* `downloads`: To create and save the TXT file locally

---

## 📌 Notes

* Works on **Chrome** and all **Chromium-based browsers** (e.g., Brave, Edge)
* No data is sent online — everything stays on your device

---

## 🤝 Contribute

Feel free to fork the repo, open issues, or submit pull requests. Feature ideas are welcome!

---
