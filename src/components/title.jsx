import * as React from "react";
import { Helmet } from 'react-helmet-async';

export default function Title({subtitle}) {
  return <Helmet>
    <title>{`Tomato or Cannabis? - ${subtitle}`}</title>
  </Helmet>
};
