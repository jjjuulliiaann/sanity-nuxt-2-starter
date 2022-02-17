# Sanity Nuxt 2 Starter 🍿

## Setup

### General Setup

1. Clone the Repository and install from the root directory:

```
npm install
```

2. Edit the project title in `package.json`

### Sanity Studio Setup

1. Switch to the studio folder with `cd studio` and setup Sanity:

```
npm install
sanity init
```

2. Edit the project title in `package.json` and `sanity.json`

3. Update the studio with `sanity upgrade`

### Nuxt Frontend Setup

1. Switch to the web folder with `cd ../web` and install the dependencies:

```
npm install
```

2. Copy the `.env.example`, rename it to `.env` and enter the information

3. Go to [sanity.io/manage](https://www.sanity.io/manage) and add `http://localhost:3000` as a CORS origin.

### Environment variables

Add a .env.development file with the necessary environment variables for development. Have a look at .env.development.example for reference.
Add the same variables on Netlify or your hosting platform. You get the Netlify API ID from Settings > General.

## Web: Nuxt 2 Frontend

For detailed explanation on how things work, check out the Nuxt [documentation](https://nuxtjs.org).

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

## Deploy

In Netlify add two separate sites with "studio" / "web" as the base directories. The rest of the build settings is handled by the netlify.toml files.

### Environment variables

Add the same variables on Netlify/your hosting platform as in the `.env` in your local web folder.

### Netlify Deploy Plugin

With the Netlify Deploy Plugin the studio user can trigger a static build from the Sanity dashboard. In Netlify you need to set up a Build hook in Settings > Build & deploy. Copy the build hook id and save it as a environment variable in your studios `.env.development`
