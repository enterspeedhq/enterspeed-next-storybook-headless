import React from 'react'
import { withHeadless } from 'storybook-addon-headless'

import EsExample from './es-example';

export default {
  title: 'Organisms/Enterspeed/Example',
  decorators: [
    withHeadless({
      restful: {
        baseURL: 'https://delivery.enterspeed.com/v1/?url=',
        headers: {
          "X-Api-Key": process.env.ENTERSPEED_ENVIRONMENT_API_KEY
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
export const EsStatus = ( args, { data } ) => {
  return data?.EsExampleData ? <EsExample {...data} /> : null
}
