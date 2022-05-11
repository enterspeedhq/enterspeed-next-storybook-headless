import React from 'react';
import { withHeadless } from 'storybook-addon-headless'

import EsVacationHouseData from './es-vacation-houses';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Enterspeed/PIM',
  component: EsVacationHouseData,
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
      EsVacationHouseData: {
        query: '?handle=MapVacationHouses',
        autoFetchOnInit: true,
      }
    }
  }
};

export const VacationHouses = ( args, { data } ) => {
  return data?.EsVacationHouseData ? <EsVacationHouseData {...data} /> : null
}