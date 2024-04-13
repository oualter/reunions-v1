// import 'server-only'
import React from 'react'

export async function getReunionsPosts() {
  const API_URL = 'http://localhost:1337/api/place-de-la-reunions'
  const chaptersData = await fetch(API_URL).then((response) => {
    return response.json()
  })
  .then((json)=> {return json})
  //   const { data } = chaptersData
  //   console.log('data from lib => ', data.length)
  //   data.map((chapterObj) => {
  //     console.log(chapterObj.attributes.Mois)
  //     return <li>chapterObj.attributes.Mois</li>
  //   })
}

// export default async function GetChapitres() {
//   const ChapitresList = await getReunionsPosts()

//   console.log(ChapitresList)
// }

// const GetChapitres = async () => {
//   const ChapitresList = await getReunionsPosts()

//   console.log(ChapitresList)
// //   return <div>GetChapitres</div>
// }
// export default GetChapitres

//   const { data } = await getMonths()
//   // const  = months;
//   console.log('attributes => ', data)