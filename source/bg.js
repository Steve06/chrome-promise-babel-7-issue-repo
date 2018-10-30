console.log("Chrome Extension's background page. Write a 'test_key' to local storage and then read it back to the console:");

const chromep = new ChromePromise();

chromep.storage.local.set({"test_key": "test_value"})
.then(()=>chromep.storage.local.get("test_key"))
.then(result=>console.info(result,'Success!'));
