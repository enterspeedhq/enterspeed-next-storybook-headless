# Enterspeed demo: Storybook Headless
This is an Enterspeed example project using **Next.js** and **Storybook** to display data from **Enterspeed**.

These days design systems are all the rage - and when you have a decoupled backend architecture a natural next step is a solid design system for handling your frontend(s)!

Using real data and a component library, provides you and your team with new possibilities in the process of designing, development and testing. And now you can give your content work a headstart as well.

## How to
Let's get to it. Follow these steps to get it up and running locally - or have a look at our demo site: https://enterspeed-next-storybook.netlify.app/

### 1. Create tenant with demo data
Go to https://app.enterspeed.com/ and login (if you don't have a user you can create one for free).

Create a new `tenant` by clicking the button in the header, tick `Pre-populate with demo data` so you'll have some data and schemas to work with.

### 2. Clone repo
Now lets get Storybook running locally; in your terminal clone this repo:

`git clone git@github.com:enterspeedhq/enterspeed-next-storybook-headless.git`

### 3. Install packages
Navigate to the `next` folder and run:

`npm install`

### 4. Add environment key
Create a file called `.env.local` in the `next` folder and insert your environment API key like this:

`STORYBOOK_ENTERSPEED_ENVIRONMENT_API_KEY=[YOUR-ENTERSPEED-API-KEY-HERE]`

**:warning: For a production environment, this should be injected on build time.**

### 5. Run Storybook
Run Storybook:

`npm run storybook`

Open the localhost URL in your browser and navigate to the Enterspeed examples.

## Figma and Storybook

Taking it further, there is a brand new (April 2022) plugin for Figma that allows designers to view Storybook stories directly in the design file. Besides allowing designers to be in sync with production, combined with real data, this this provides the designer with data documentation at hand.

https://www.chromatic.com/docs/figma

## Inspiration and links
This is just the tip of the iceberg – the possibilities are many, but from our perspective working with real data during your design and development process is a gamechanger!

You can read more about Headless Storybook at https://storybook.js.org/addons/storybook-addon-headless and make sure to check out the addons: https://storybook.js.org/addons/

We also recommend reading Brad Frosts take on Atomic Design and Storybook here: https://bradfrost.com/blog/post/atomic-design-and-storybook/

See our Umbraco and Next.js tutorial at https://github.com/enterspeedhq/enterspeed-demo-nextjs, visit us at https://www.enterspeed.com/ and https://www.linkedin.com/company/enterspeed/.

Questions, input or anything else please reach out! :heart: