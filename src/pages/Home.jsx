import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import { requests, headers } from '../Request';


const Home = () => {

  return (
    <>
      <Main />
      <Row title='Up Coming' fetchURL={requests.requestUpcoming} headers={headers} />
      <Row title='Popular' fetchURL={requests.requestPopular} headers={headers} />
      <Row title='Trending' fetchURL={requests.requestTrending} headers={headers} />
      <Row title='Top Rated' fetchURL={requests.requestTopRated} headers={headers} />
      <Row title='Horror' fetchURL={requests.requestHorror} headers={headers} />

    </>
  )
}

export default Home
