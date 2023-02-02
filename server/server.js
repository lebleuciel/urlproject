const host = 'localhost';
const port = 8000;
const app = require("../app")
const requestListener = function (req, res) {};

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);

});