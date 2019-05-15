const { app } = require('./app');
const PORT = 8080;
app.listen(PORT, () => 'listening on', PORT);