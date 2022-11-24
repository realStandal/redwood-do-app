module.exports = {
  apps: [
    {
      name: 'serve',
      cwd: './',
      script: 'node_modules/.bin/rw-server',
      args: 'api',
      instances: 'max',
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
}
