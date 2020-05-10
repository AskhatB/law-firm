module.exports = {
  apps: [
    {
      name: 'law-firm',
      script: 'npm start',
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      key: '~/.ssh/id_rsa',
      user: 'root',
      host: ['188.166.165.231'],
      ref: 'origin/master',
      repo: 'git@github.com:AskhatB/instamart.git',
      path: '/var/www/instamart',
      'post-deploy':
        'npm run build && pm2 restart pm2.config.js --env production'
    }
  }
}
