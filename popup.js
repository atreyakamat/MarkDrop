document.getElementById('extract').addEventListener('click', () => {
  chrome.bookmarks.getTree((bookmarkTreeNodes) => {
    let output = [];

    function processBookmarks(nodes, depth = 0) {
      for (let node of nodes) {
        const indent = '  '.repeat(depth);
        if (node.title) {
          output.push(`${indent}${node.title}`);
        }
        if (node.url) {
          output.push(`${indent}- ${node.url}`);
        }
        if (node.children) {
          processBookmarks(node.children, depth + 1);
        }
      }
    }

    processBookmarks(bookmarkTreeNodes);

    const blob = new Blob([output.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
      url: url,
      filename: 'bookmarks.txt',
      saveAs: true
    });
  });
});
