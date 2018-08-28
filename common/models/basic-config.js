'use strict';
const addHours = require('date-fns/add_hours')
module.exports = function(Basicconfig) {
  Basicconfig.observe('before save', function updateTimestamp(ctx, next) {
    console.log(ctx)
    if (ctx.isNewInstance) {
      ctx.instance.created_at = addHours(new Date(), 8)
    } else {
      ctx.data.updated_at = addHours(new Date(), 8)
    }
    next()
  })
};
