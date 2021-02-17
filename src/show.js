import React, { useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";
import { useParams } from "react-router-dom";

const Show = () => {
  const [fruit, setFruit] = useState();
  const { id } = useParams();

  const meta = {
    meta: {
      property: {
        "og:title": fruit,
        "og:description": "This page is of" + fruit,
        "og:image":
          "https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/fruit_selection_155265101_web.jpg",
      },
    },
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/fruits/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setFruit(response.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <DocumentMeta {...meta}>
        <p>Show page of: "{fruit && fruit}" </p>
      </DocumentMeta>
    </div>
  );
};

export default Show;
