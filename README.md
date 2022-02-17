# Sanity Nuxt 2 Starter 🍿

## Setup

### General Setup

1. Clone the Repository and install from the root directory with `npm install`

2. Edit the project title in `package.json`

### Sanity Studio Setup

1. Switch to the studio folder with `cd studio`, install the dependencies (`npm install`) and initialize Sanity (`sanity init`)

2. Edit the project title in `package.json` and `sanity.json`

3. Update the studio with `sanity upgrade`

### Nuxt Frontend Setup

1. Switch to the web folder with `cd ../web` and install the dependencies with `npm install`

2. Copy the `.env.example`, rename it to `.env` and config the variables.

3. Go to [sanity.io/manage](https://www.sanity.io/manage) and add `http://localhost:3000` as a CORS origin.

## Development

Run the following commands from root:

```bash
# serve sanity studio at localhost:3333
# serve nuxt with hot reload at localhost:3000
$ npm run dev

# build static versions of studio and frontend for production
$ npm run build
$ npm run start

# build only static frontend
$ npm run build-web
```

### Studio: Sanity CMS

For detailed explanation on how things work, check out the Sanity [resources](https://www.sanity.io/docs/overview-introduction).

To avoid errors in the frontend, publish your Options page in Sanity.

### Web: Nuxt 2 Frontend

For detailed explanation on how things work, check out the Nuxt [documentation](https://nuxtjs.org).

## Deploying to Netlify

In Netlify add two separate sites with "studio" / "web" as the base directories. The rest of the build settings is handled by the `netlify.toml` files.

### Environment variables

Add the same variables on Netlify as in the `.env` in your local web folder and in the `.env.development` in your local studio folder.

### Netlify Deploy Plugin

With the Netlify Deploy Plugin the studio user can trigger a static build directly from the Sanity dashboard. To set it up:

1. In Netlify in your frontend project you need to set up a build hook in Settings > Build & deploy.

2. Copy the **build hook id** and save it as a environment variable in your studios `.env.development` as well as in the netlify studio project.

3. From Netlifys Frontend project in General > Site details copy the **API ID** and save it in your studios `.env.development` as well as in the netlify studio project.

4. After a Rebuild the deploy plugin in the studios dashboard can be used to trigger static builds.
