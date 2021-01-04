const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const authRouter = require('./routes/authRouter');
const { sequelize } = require('./models');
app.use('/', authRouter)

sequelize.authenticate().then(() => console.log("Database Connected!"));
app.listen(8080, () => console.log("Port 8080"));