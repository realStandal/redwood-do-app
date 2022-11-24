import { execaCommandSync } from 'execa'
import { Listr } from 'listr2'

export default async () => {
  const tasks = new Listr([
    {
      title: 'Installing PM2',
      task: () => execaCommandSync('npm install -g pm2'),
    },
    {
      title: 'Building the API',
      task: () => execaCommandSync('yarn rw build api'),
    },
    {
      title: 'Migrating the database',
      task: () => {
        execaCommandSync('yarn rw prisma migrate deploy')
        execaCommandSync('yarn rw prisma generate')
        execaCommandSync('yarn rw dm up')
      },
    },
  ])

  try {
    console.log('')
    await tasks.run()
    console.log('')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
