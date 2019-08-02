import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const posts = [
  {
    title: 'lorem1',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio explicabo facilis necessitatibus praesentium quae quas. Dolore dolorem ea eius enim eum, id ipsa porro qui, ratione sit suscipit voluptatibus.',
  },
  {
    title: 'lorem2',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio explicabo facilis necessitatibus praesentium quae quas. Dolore dolorem ea eius enim eum, id ipsa porro qui, ratione sit suscipit voluptatibus.',
  },
  {
    title: 'lorem3',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio explicabo facilis necessitatibus praesentium quae quas. Dolore dolorem ea eius enim eum, id ipsa porro qui, ratione sit suscipit voluptatibus.',
  },
  {
    title: 'lorem4',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio explicabo facilis necessitatibus praesentium quae quas. Dolore dolorem ea eius enim eum, id ipsa porro qui, ratione sit suscipit voluptatibus.',
  },
];

app.get('/posts', (req, res) => res.send(posts));

app.get('/posts/:id', (req, res) => {
  console.log(this);
  const { id } = req.params;
  console.log(posts[id]);
  return res.send(posts[id]);
});

app.listen(3333, () => {
  console.log('holla');
});
