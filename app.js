const express = require("express");
const app = express();
const listBank = require('./listBank');
const path = require('path');

//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
//app.get('/styles.css', (req, res) => res.sendFile(path.join(__dirname, 'styles.css')));

app.get('/', (req, res) => {
    const games = listBank.list();
    res.send(`
    <!DOCTYPE html>
      <html>
        <head>
          <title>Board Game Nerd Rankings</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div class='boardgame-list'>
            <header>
                <h1>Top Board Games</h1>
            </header>
            <div class="boardgame-row">
            <div class="rank">RANK</div>
            <div class="image"></div>
            <div class="title">TITLE</div>
            <div class="rating">RATING</div>
            <div class="voters">VOTERS</div>
            </div>
            ${games.map(game => {
                return `
                <div class="boardgame-row">
                  <div class="rank">${game.rank}</div>
                  <div class="image"><img src="${game.image}"></div>
                  <div class="title"><a href="/posts/${game.rank}">${game.title}</a><small> (${game.year})</small></div>
                  <div class="rating">${game.rating}</div>
                  <div class="voters">${game.voters}</div>
                </div>`;
              }).join('')}
          </div>
        </body>
      </html>
    `);
  });
  
  app.get('/posts/:rank', (req, res) => {
    const rank = req.params.rank;
    const game = listBank.find(rank);
    if (!game.rank) {
      throw new Error();
    }
    else {
      res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Board Game Nerd Rankings</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <div class="boardgame-page-content">
                <div class="text">
                    <div class="title-row">
                        <img src="${game.image}">
                        <h1>${game.title} <small>(${game.year})</small></h1>
                    </div>
                    <div class="description">
                        <p>${game.description}
                        </p>
                        <p><a href="/">< Go Back</a></p>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `);
    }
  });
  
  app.use(function errorHandler (err, req, res, next) {
    console.error(err.stack);
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Board Game Nerd Rankings</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <div class="boardgame-list">
                <header><h1>Board Game Nerd Rankings</h1></header>
                <div class="not-found">
                    <p>Oh no! Page Not Found</p>
                </div>
            </div>
        </body>
        </html>`);
  })
  
  const PORT = 3333;
  
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });