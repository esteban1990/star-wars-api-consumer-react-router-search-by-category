import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { People } from './components/People';
import { Planets } from './components/Planets';
import { Films } from './components/Films';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
// import { Route } from 'react-router-dom';

export const App = () => {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPeople();
    getPlanets();
    getFilms();
  }, [])

  const getPeople = async () => {
    const url = 'https://www.swapi.tech/api/people/?format=json'
    const resp = await fetch(url)
    const data = await resp.json();
    console.log(data.results);
    setPeople(data.results)
  }

  const getPlanets = async () => {
    const url = 'https://www.swapi.tech/api/planets/?format=json'
    const resp = await fetch(url)
    const data = await resp.json();
    console.log(data.results);
    setPlanets(data.results)
  }

  const getFilms = async () => {
    const url = 'https://www.swapi.tech/api/films/?format=json'
    const resp = await fetch(url)
    const data = await resp.json();
    console.log(data.result);
    setFilms(data.result)
  }

  return (
    <>
      <Router>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/people'>
          <People people={people} />
        </Route>
        <Route exact path='/planets'>
          <Planets planets={planets} />
        </Route>
        <Route exact path='/films'>
          <Films films={films} />
        </Route>
      </Router>
    </>
  )
}

export default App;