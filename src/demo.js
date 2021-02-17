import React, { useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";

const Demo = () => {
  const meta = {
    meta: {
      property: {
        "og:title": "Fruits",
        "og:description": "Read all about fruits here",
        "og:image":
          "https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/fruit_selection_155265101_web.jpg",
      },
    },
  };

  return (
    <div>
      <DocumentMeta {...meta}>
        <p>Welcome to fruits.com!!</p>
      </DocumentMeta>
    </div>
  );
};

export default Demo;
