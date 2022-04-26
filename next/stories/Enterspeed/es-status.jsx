import React from 'react';

export default function EsStatus({ EsExampleData }) {
  return (
    <h1>Status: {EsExampleData.meta.status}</h1>
  );
}
