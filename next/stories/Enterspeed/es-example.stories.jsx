import React, { ReactElement } from 'react'
import {
  HeadlessStoryContext,
  withHeadless,
} from 'storybook-addon-headless'

import EsExample from './es-example';

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
        EsExampleData: {
            query: '%2F',
            autoFetchOnInit: true,
        }
    }
  }
};

export const EsStatus = ({ data }) => {
  console.log(data);

  return data?.EsExampleData ? <EsExample {...data} /> : null
}
