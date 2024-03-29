// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "7e0e9gy4", // Das ist die default projectID
  dataset: "production", // or the name you chose in step 1
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  apiVersion: "2022-10-20", //
  useCdn: process.env.NODE_ENV === "production", // `false` if you want to ensure fresh data
  //useCdn === true, gives you fast response, but cached dataset
  //useCdn === false, bit slower, but fresh and nice data
});

export const previewClient = sanityClient({
  projectId: "7e0e9gy4", // Das ist die default projectID
  dataset: "production", // or the name you chose in step 1
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  apiVersion: "2022-10-20",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN, //Muss erstellt werden
});
