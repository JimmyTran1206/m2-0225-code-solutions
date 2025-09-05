import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('request path:', req.path);
  console.log('request method:', req.method);
  console.log('The date is:', new Date());
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.get('/', (req, res, next) => {
  res.send('get request to root');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('get to /notes');
  next();
});

app.post('/notes/123', (req, res, next) => {
  res.send('post to /notes/123');
  next();
});
