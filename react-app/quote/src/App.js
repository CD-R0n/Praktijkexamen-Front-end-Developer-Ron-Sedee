import './App.css';

function App() {
  const Quote = require('inspirational-quotes');
  let quote = Quote.getQuote();
  function refresh() {
    window.location.reload(true);
  }
  function Knop() {
    return (
      <button onClick={refresh}>Nieuwe Quote</button>
    );
  }
  return (
    <div className="App">
      <header className="col-3">
        <h1 className="wit">Muziekschool H&J</h1>
        <p className="wit">Luisterend oor <i>voor</i> talent!</p>
    </header>    
    <nav>
        <menu className="col-3">
            <li><a href="../../../index.html">Home</a></li>
            <li><a href="../../../overons.html">Over ons</a></li>
            <li><a href="../../../tarieven.html">Tarieven</a></li>
            <li><a href="../../../blog.html">Blog</a></li>
            <li><a href="react-app/quote/build/index.html" className="huidig">Motivatie</a></li>
            <li><a href="../../../contact.html">Contact</a></li>
        </menu>
    </nav>
    <hr />
    <div className="col-3" id="main">
        <section className="col-1" id="links">
            <h2>Motiverende Quote</h2>
            <p>Op deze pagina kun je terecht voor een willekeurige motiverende quote.</p>
        </section>
        <section className="col-2" id="rechts">
            <h2>{quote.author}:</h2>
            <p><q cite={quote.author}>{quote.text}</q></p>
            <br />
            <Knop />
        </section>
    </div>
    <footer class="col-3">
        &copy; Copyright 2021 Muziekschool H&J <br />
        (Dit is een oefenopdracht, alle informatie op deze website is fictief.)
    </footer>
    </div>
  );
}

export default App;