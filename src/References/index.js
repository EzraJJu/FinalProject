import { Container, Hello, Sub_Headers, Text} from './style'
import React, {useState, useEffect} from 'react'

const Refs = () => {
  const [search, setSearch] = useState()

  useEffect(() => {
    const getSearch = async () => {
      const response = await fetch('ac11640c4dmshf8a32bd5a656497p1d87d2jsn0795ff07c5f4')
      const data = await response.json()
      setSearch(data)
    }

    getSearch()
  }, [search])

  console.log('search: ')
  console.log(search)

  return (
    <Container>
      <Hello>Sites to reference</Hello>
      <Sub_Headers>Blue Alliance</Sub_Headers>
      <Text> <a href="https://www.thebluealliance.com/">This</a> is the link to the Blue Alliance page</Text>
    </Container>
  )

}



export default Refs

/* https://rapidapi.com/apigeek/api/google-search3/ */

/*
  const fetch = require('node-fetch');

  const url = 'https://google-search3.p.rapidapi.com/api/v1/search/q=bluealliance';

  const options = {
    method: 'GET',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'US',
      'X-RapidAPI-Key': 'ac11640c4dmshf8a32bd5a656497p1d87d2jsn0795ff07c5f4',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
*/