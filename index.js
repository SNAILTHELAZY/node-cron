var cron = require('node-cron');

cron.schedule('*/10 * * * * *', () => {
  console.log('running a task every 10 seconds');
});
