import React from "react";
import DocumentMeta from "react-document-meta";

function Demo() {
  const meta = {
    meta: {
      property: {
        "og:title": "Fruits",
        "og:url": "https://samvikshana.weebly.com/",
        "og:image":
          "https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/fruit_selection_155265101_web.jpg",
        "og:description": "Best Fruit",
      },
    },
  };
  return (
    <div>
      <DocumentMeta {...meta} />

      <p>Welcome to fruits.com!!</p>
    </div>
  );
}

export default Demo;