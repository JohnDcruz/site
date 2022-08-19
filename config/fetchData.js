const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchData({ type }) {
  const entries = await client.getEntries({
    content_type: type,
  });
  if (entries.items) return entries.items
  console.log(`Error getting data from Contentful.`);
}

export async function fetchWork({ type, category }) {
  const entries = await client.getEntries({
    content_type: type,
    'fields.category[match]': category
  });
  if (entries.items) return entries.items
  console.log(`Error getting data from Contentful.`);
}

export default { fetchData }