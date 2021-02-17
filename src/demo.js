import React from "react";
import DocumentMeta from "react-document-meta";
// import { Helmet } from "react-helmet";

function Demo() {
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
      {/* <Helmet>
        <title>Fruits</title>
        <meta name="description" content="Get best fruits here" />
        <meta
          property="og:description"
          content="Learn and try this amazing feature to get more social media traffic to your site"
        />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaQvHrCfrIAZvxzYqkisf5yPjpgyXHxgozQ&usqp=CAU"
        />
      </Helmet> */}
      <DocumentMeta {...meta} />

      <p>Welcome to fruits.com!!</p>
    </div>
  );
}

export default Demo;
