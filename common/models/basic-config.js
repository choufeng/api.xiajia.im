const datef = require('date-fns')
module.exports = function(Basicconfig) {
  // Basicconfig.beforeCreate = (next, m) => {
  //   m.create = datef.addHours(new Date(), 8)
  //   next()
  // }
  Basicconfig.observe('before save', function updateTimestamp(ctx, next) {
    console.log(ctx)
    if (ctx.isNewInstance) {
      ctx.instance.created_at = datef.addHours(new Date(), 8)
    } else {
      ctx.data.updated_at = new datef.addHours(new Date(), 8)
    }
    next()
  })
};
