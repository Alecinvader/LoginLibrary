/* eslint-disable linebreak-style */
const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'Make a sandwich',
      author: 'Chief Beef',
    },
    {
      title: 'Make a chicken',
      author: 'Hillary Clinton',
    },
    {
      title: 'Make a hotel',
      author: 'Donald Trump',
    },
    {
      title: 'Make a controversy',
      author: 'Everyone',
    },
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books
        },
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[id]
        }
      );
    });
  return bookRouter;
}

module.exports = router;
