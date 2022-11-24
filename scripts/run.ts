import { execaCommand } from 'execa'

export default () =>
  execaCommand('pm2-runtime start api/config/ecosystem.config.js')
