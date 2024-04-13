// import 'server-only'
// import qs from 'qs'

// export const CACHE_TAG_FICTIONS = 'fictions'

// // const CMS_URL = process.env.CMS_URL
// const CMS_URL = 'http://127.0.0.1:1337'

// export async function getFiction(slug) {
//   const { data } = await fetchFictions({
//     filters: { slug: { $eq: slug } },
//     fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
//     populate: { image: { fields: ['url'] } },
//     pagination: { pageSize: 1, withCount: false },
//   })
//   if (data.length === 0) {
//     return null
//   }
//   const item = data[0]
//   return {
//     ...toReview(item),
//     body: marked(item.attributes.body, { headerIds: false, mangle: false }),
//   }
// }

// export async function getFictions() {
//   const { data, meta } = await fetchFictions({
//     // fields: ['slug', 'title', 'subtitle', 'publishedAt'],
//     fields: [
//       'Jour_du_mois',
//       'Mois',
//       'Annee',
//       'Texte_microfiction',
//       'createdAt',
//     ],
//     // populate: { image: { fields: ['url'] } },
//     sort: ['createdAt:desc'],
//     // pagination: { pageSize, page },
//   })
//   return {
//     pageCount: meta.pagination.pageCount,
//     fiction: data.map(toFiction),
//   }
// }


// async function fetchFictions(parameters) {
//   const url =
//     `${CMS_URL}/api/place-de-la-reunions?` +
//     qs.stringify(parameters, { encodeValuesOnly: true })

//   const response = await fetch(url, {
//     next: {
//       tags: [CACHE_TAG_FICTIONS],
//     },
//   })
//   if (!response.ok) {
//     throw new Error(`CMS returned ${response.status} for ${url}`)
//   }
//   return await response.json()
// }

// function toFiction(item) {
//   const { attributes } = item
//   return {
//     annee: attributes.annee,
//     Mois: attributes.Mois,
//     Jour_du_mois: attributes.Jour_du_mois,
//     date: attributes.createdAt.slice(0, 'yyyy-mm-dd'.length),
//     // image: new URL(attributes.image.data.attributes.url, CMS_URL).href,
//   }
// }
