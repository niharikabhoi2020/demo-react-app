import React, { useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";

const Demo = () => {
  const [fruit, setFruit] = useState();

  const meta = {
    meta: {
      property: {
        "og:title": fruit,
        "og:description": "Read all about fruits here",
        "og:image":
          "https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/fruit_selection_155265101_web.jpg",
      },
    },
  };

  useEffect(() => {
    console.log("in console log");
    fetch(`http://localhost:3001/api/fruits/1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setFruit(response.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <DocumentMeta {...meta}>
        <p>Welcome to fruits.com!!</p>
      </DocumentMeta>
    </div>
  );
};

export default Demo;
