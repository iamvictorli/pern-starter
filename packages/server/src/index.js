import express from 'express';
import path from 'path';

import libraries from './routes/libraries';

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));

// routing
app.use('/api/libraries', libraries);

// displaying react files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export default app;
