Repo created to illustrate issue opened at https://github.com/babel/babel/issues/8940 :

Short description of the issue: chrome-promise.js is not transpiled correctly for me in Babel 7 and yields "Uncaught ReferenceError: ChromePromise is not defined"

Background: My Chrome extension project uses the Chrome-Promise module from https://github.com/tfoxy/chrome-promise/blob/master/chrome-promise.js in order to promisify Chrome API's callback-style functions.

Transpiling the project with Babel 6 has always worked fine. Recently I moved to Babel 7. Since then, when I allow the chrome-promise.js file to be transpiled by Babel, this results in a "Uncaught ReferenceError: ChromePromise is not defined" error when running the extension. The program works well when I leave chrome-promise.js as is, untranspiled.

Steps to reproduce:
- Once you have downloaded the repo, you can check that the untranspiled source code in 'source' directory works as follows:
  - Open the Chrome browser
  - Go to chrome://extensions/
  - Make sure you are in 'Developer mode' at the top-right corner of that page
  - Drag 'source' folder to that Chrome page; the extension from this repo 'chrome-promise-babel-7-issue-repo ' gets installed
  - The extension only has a background page which, when it works, writes a {"test_key": "test_value"} object to local storage, waits for the asynchronous writing task to complete, then reads this key from local storage, and again, after waiting for completion, writes the object to the console followed by 'Success!'.
  - You can check whether it worked by clicking on 'Inspect views background page' on the extension's card on the extension page
  - Now, try the transpiled version:
    - at command line, the first time, type 'node install'
    - then type 'node build'
    - the 'build' folder should contain the transpiled bg.js and chrome-promise.js files.
    - to check whether the transpiled files work, drag the 'build' folder into the chrome://extensions/ page.
    - the background page should produce an error: "Uncaught ReferenceError: ChromePromise is not defined"

