const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); // Serve static files

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
