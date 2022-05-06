import React from 'react';
import { withHeadless } from 'storybook-addon-headless'

import EsPim from './es-pim';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Enterspeed/PIM',
  component: EsPim,
  decorators: [
    withHeadless({
      restful: {
        baseURL: 'https://delivery.enterspeed.com/v1/',
        headers: {
          "X-Api-Key": process.env.STORYBOOK_ENTERSPEED_ENVIRONMENT_API_KEY
        }
      },
    }),
  ],
  parameters: {
    headless: {
      EsPimData: {
        query: '?handle=MapVacationHouses',
        autoFetchOnInit: true,
      }
    }
  }
};

// Headless data is second parameter, first parameter is "args" e.g.: https://github.com/ArrayKnight/storybook-addon-headless/blob/master/src/examples/restful.stories.tsx
export const Pim = ( args, { data } ) => {
  return data?.EsPimData ? <EsPim {...data} /> : null
}
