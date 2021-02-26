import React from "react";
import { config } from "../config";

function HomePage({ articles }) {
  return (
    <>
      <h1>{config.appName}</h1>

      <p>
        <em>{config.appTagline}</em>
      </p>

      <p>Page Name</p>
    </>
  );
}

export default HomePage;

// export async function getStaticProps({ params }) {
// - Sample Request
// const articles = await getCollectionItems(articlesCollection());
// return {
//   props: {
//     articles,
//   },
//   revalidate: 60, // Seconds. This refresh time could be longer depending on how often data changes.
// };
// }
