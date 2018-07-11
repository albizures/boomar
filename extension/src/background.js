const browser = window.chrome || window.browser

const isChrome = process.env.TARGET === 'chrome'

// const { console } = chrome.extension.getBackgroundPage();

const handleChanged = (type) => (id, changeInfo) => {
  console.log(type, browser.bookmarks);
  console.log("Item: " + id + " changed");
  if (changeInfo) {
    console.log("Title: " + changeInfo.title);
    console.log("Url: " + changeInfo.url);
  }
  console.table([changeInfo]);
}

window.printTree = () => browser.bookmarks.getTree(console.info)

// window.printTree()

const getToolbar = () => new Promise((resolve, reject) => {
  browser.bookmarks.getTree((tree) => {
    if (isChrome) {
      resolve(tree[0].children[0])
    } else {
      resolve(tree[0].children.find(child => child.id === 'toolbar_____'))
    }
  })
})

getToolbar().then(console.info)

// browser.bookmarks.onCreated.addListener(handleChanged('onCreated'))
// browser.bookmarks.onRemoved.addListener(handleChanged('onRemoved lalal'))
// browser.bookmarks.onChanged.addListener(handleChanged('onChanged'))
// browser.bookmarks.onMoved.addListener(handleChanged('onMoved'))
