import dotenv from "dotenv";
import express from "express";

import documents from "./routes/documents.js";
import authenticate from "./routes/authenticate.js";

(async function () {
    dotenv.config();

    const { PORT } = process.env;
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    app.use("/documents", authenticate, documents);
})();
