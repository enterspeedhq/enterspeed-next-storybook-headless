import React from 'react';
import './es-pim.css';

/**
 * This is the raw data as stored in the PIM.
 */
export default function EsPim({ EsPimData }) {
  return (
  <>
    <pre>{JSON.stringify(EsPimData, null, 2) }</pre>
  </>
  )
}
