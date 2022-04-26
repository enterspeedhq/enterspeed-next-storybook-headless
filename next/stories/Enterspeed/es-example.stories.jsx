import React from 'react'
import { withHeadless } from 'storybook-addon-headless'

export default {
  title: 'Organisms/Enterspeed/Example',
  decorators: [
    withHeadless({
      restful: {
        baseURL: 'https://delivery.enterspeed.com/v1/?url=',
        headers: {
          "X-Api-Key": ""
        }
      },
    }),
  ],
  parameters: {
    headless: {
      asd: { // <-- Den her bliver til "data.asd" i dit komponent
            query: '%2F',
            autoFetchOnInit: true,
        }
    }
  }
};

export const EsStatus = ( args, { data } ) => { // <-- Headless data er nummer 2 parameter, 1 parameter er "args" se f.eks.: https://github.com/ArrayKnight/storybook-addon-headless/blob/master/src/examples/restful.stories.tsx
  return <span>{JSON.stringify(data.asd)}</span>;
}
