// pm2 start process.config.js
module.exports = {
  apps: [
    {
      name: "Server A",
      script: "./serverA.js",
      instances: 4,
      exec_mode: 'cluster',
      watch: true,
    }
  ]
};
