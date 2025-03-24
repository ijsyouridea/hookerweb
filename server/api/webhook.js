const bodyParser = require("body-parser");

let notifications = [];

module.exports = (req, res) => {
    if (req.method === "POST") {
        bodyParser.json()(req, res, () => {
            const payload = req.body || {};
            console.log("Received webhook:", payload);

            // Add the notification to the array
            notifications.push(payload);

            res.sendStatus(200);
        });
    } else if (req.method === "GET") {
        // Send the latest notifications
        res.status(200).json(notifications);
    } else {
        res.status(405).send("Method Not Allowed");
    }
};
