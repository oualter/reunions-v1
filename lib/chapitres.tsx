// import 'server-only'

// import qs from 'qs'

export const CACHE_TAG_CHAPITRES = 'Chapitres'

// const CMS_URL = process.env.CMS_URL

// export async function getChapters() {
//   const chaptersData =  await fetch(
//     `http://localhost:1337/api/place-de-la-reunions`
//   ).then((response) => {
//       return response.json()
//     })
//     // .then((json)=> {return json})
//     const { data } = chaptersData;
//     console.log('data from lib => ', data.length)
//     data.map((chapterObj)=>{
//         console.log(chapterObj.attributes.Mois)
//         return <li>chapterObj.attributes.Mois</li>
//     })
    // return (
    //     {data.map( (chapterobj)=>{
    //         <li>{chapterobj.attributes.mois}</li>
    //     })}        
    // )
//   console.log('depuis la lib => ', chaptersData);
//   return (
//     <div className="flex">
//       <div>{profileData.image}</div>
//       <div>{profileData.name}</div>
//       <div>{profileData.username}</div>
//     </div>
//   )
// }


/*
export async function getChapitres() {
  const { data, meta } = await fetchChapitres({
    fields: ['Jour_du_mois', 'Mois', 'Heure', 'publishedAt'],
    // populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    // pagination: { pageSize, page },
  })
  return {
    chapitres: data.map(toChapitre),
  }
}

async function fetchChapitres(parameters) {
  const url =
    `${CMS_URL}/api/place-de-la-reunions?` +
    qs.stringify(parameters, { encodeValuesOnly: true })
  // console.log('[fetchReviews]:', url);
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_CHAPITRES],
    },
  })
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`)
  }
  return await response.json()
}

function toChapitre(item) {
  const { attributes } = item
  return {
    jour: attributes.Jour_du_mois,
    mois: attributes.Mois,
    heure: attributes.Heure,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    // image: new URL(attributes.image.data.attributes.url, CMS_URL).href,
  }
}*/