'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router -> url -> controller
  router.post('/login/register',controller.login.register)
  router.post('/login',controller.login.loginIn)

};
