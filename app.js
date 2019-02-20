'use strict';

process.env.NODE_ENV = 'production';

const fs = require('fs');
const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const reactController = require('./controllers/react');

const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});


router.get('/react/legacy', reactController.home('legacy'));
router.get('/react/mix', reactController.home('mix'));
router.get('/react/new', reactController.home('new'));
router.get('/react/none', reactController.home('none'));

app.use(serve('./assets/build'));
app.use(router.routes());

app.listen(3300, () => {
  console.log('Server start listen at 3300');
});
