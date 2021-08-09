# RhymeThai
หาคำคล้องจอง

# ติดตั้ง
```cmd
npm install rhymethai
```

# example
```js
const rhymethai = require("rhymethai");

rhymethai("คำ").then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
```