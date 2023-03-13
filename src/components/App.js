import '../styles/App.scss';
import quotes from '../data/friends.json';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(quotes);

  const [search, setSearch] = useState(ls.get('search',''));


  const handleFilter = (event) => {
    searchValue =event.target.value;
    setSearch(searchValue);

  }



  const renderList = () => {
    
    return data.map((eachQuote)); => (
      <li className="list__item">
        <p className="list__quote">{eachQuote.quote}-</p>
        <p className="list__character">{eachQuote.character}</p>
      </li>
    )
  }


  return (
  
  <div className="App">
    <header className="header">
      <h1 className="header__title">Frases de Friends</h1>
      <form>
        <label>Filtrar por frase</label>
        <input
          className="header__search--text"
          autoComplete="off"
          type="search"
          name="search--text"
          placeholder="Escribe aquí una frase o palabra"
          onInput={handleFilter}
          value={search} />
        <label>Filtrar por personaje</label>
        <select
          className="header__search--character"
          type="select"
          name="search--character"
          placeholder="Escribe aquí una frase o palabra"
          onChange={handleSelect}
        >
          <option>Todos</option>
          <option>Mónica</option>
          <option>Rachel</option>
          <option>Phoebe</option>
          <option>Joey</option>
          <option>Ross</option>
          <option>Chandler</option>
        </select>
      </form>
    </header>
    <main>

        <ul classsName="quotes__list">{renderList()}</ul>


      </main>
  </div>
  );
}

export default App;
