import React from 'react'
import { withHeadless } from 'storybook-addon-headless'

import EsStatus from './es-status';

export default {
  title: 'Enterspeed',
  decorators: [
    withHeadless({
      restful: {
        baseURL: 'https://delivery.enterspeed.com/v1/?url=',
        headers: {
          "X-Api-Key": process.env.STORYBOOK_ENTERSPEED_ENVIRONMENT_API_KEY
        }
      },
    }),
  ],
  parameters: {
    headless: {
      EsExampleData: {
            query: '%2F',
            autoFetchOnInit: true,
        }
    }
  }
};

// Headless data is second parameter, first parameter is "args" e.g.: https://github.com/ArrayKnight/storybook-addon-headless/blob/master/src/examples/restful.stories.tsx
export const Status = ( args, { data } ) => {
  return data?.EsExampleData ? <EsStatus {...data} /> : null
}
