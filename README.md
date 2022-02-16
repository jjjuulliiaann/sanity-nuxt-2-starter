# Sanity Nuxt 2 Starter 🍿

## Build Setup

```bash
# to start, install dependencies in root folder, as well as in the /studio and /web folder
$ npm install

# serve sanity studio at localhost:3333
# serve nuxt with hot reload at localhost:3000
# (run command from root folder)
$ npm run dev

# build static versions of studio and frontend for production
# (run command from root folder)
$ npm run build
$ npm run start

# build only static frontend
# (run command from root folder)
$ npm run build-web
```

## Deploy

In Netlify add two separate sites with "studio" / "web" as the base directories. The rest of the build settings is handled by the netlify.toml files.

## Studio: Sanity CMS

For detailed explanation on how things work, check out the Sanity [resources](https://www.sanity.io/docs/overview-introduction).

### Netlify Deploy Plugin

With the Netlify Deploy Plugin the studio user can trigger a static build from the Sanity dashboard. In Netlify you need to set up a Build hook in Settings > Build & deploy. Copy the build hook id and save it as a environment variable.

### Environment variables

Add a .env.development file with the necessary environment variables for development. Have a look at .env.development.example for reference.
Add the same variables on Netlify or your hosting platform. You get the Netlify API ID from Settings > General.

## Web: Nuxt 2 Frontend

For detailed explanation on how things work, check out the Nuxt [documentation](https://nuxtjs.org).

### Environment variables

Add a .env file with the necessary environment variables for development. Have a look at .env.example for reference.
Add the same variables on Netlify/your hosting platform.
