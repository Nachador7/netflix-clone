import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { requests, headers } from '../Request';


const Home = () => {

  return (
    <>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} headers={headers} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} headers={headers} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} headers={headers} />
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} headers={headers} />
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} headers={headers} />

    </>
  )
}

export default Home
