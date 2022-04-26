# Enterspeed demo: Storybook Headless
This is an Enterspeed example project using **Next.js** and **Storybook** to display data from **Enterspeed**.

These days design systems is all the rage, and when you have a decoupled 7

This is a simple example of how you can populate and use Storybook with real data from Enterspeed.

Using real data and a component library such as Storybook, provides you and your team with new possibilities for designing and developing better web applications.

## Demo
You can view a demo of the live site here: Coming soon.

## How to

### 1. Create tenant with demo data
Go to https://app.enterspeed.com/ and login (if you don't have a user you can create one for free).

Create a new `tenant` by clicking the button in the header, tick `Pre-populate with demo data` so we have some data and schemas to work with.

### 2. Clone repo
Now lets get Storybook running locally; in your terminal clone this repo:

`git clone git@github.com:enterspeedhq/enterspeed-demo-nextjs.git`

### 3. Install packages
Navigate to the `next` folder and run:

`npm install`

### 4. Add environment key
Create a file called `.env.local` and insert your environment API key like this:

`ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY=[YOUR-ENTERSPEED-API-KEY-HERE]`

**:warning: For a production environment, this should be injected on build time.**

### 5. Run Storybook
Run Storybook:

`npm run storybook`



## Inspiration and links

Read more about Headless Storybook here: https://storybook.js.org/addons/storybook-addon-headless

Read Brad Frosts take on Atomic Design and Storybook here: https://bradfrost.com/blog/post/atomic-design-and-storybook/

See our Umbraco and NExt.js tutorial: https://github.com/enterspeedhq/enterspeed-demo-nextjs

Visit us at https://www.enterspeed.com/ and https://www.linkedin.com/company/enterspeed/.