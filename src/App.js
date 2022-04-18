import './App.css';
import FormCalcularBrejasLitro from './FormCalcularBrejasLitro.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>🍻$/L</p><h1>Calcular custo <wbr /><span className="Breja-span-theme">breja</span> por litro</h1>
        <p>Facilitando seus cálculos no mercado.</p>
      </header>
      <main>
          <section>
            <FormCalcularBrejasLitro />
          </section>  
          <section>
              <p>No Brasil, informar o preço do litro da <span className="Breja-span-theme">breja</span> não é obrigatório. Com este app você pode calcular o preço do litro da <span className="Breja-span-theme">breja</span> para saber, por exemplo, se é melhor levar aquele fardo de 15 ou de 12.</p>
          </section>
      </main>
      <footer>
          <p>MIT License 2022. Gabriel D. Sanchez. Código-fonte no <a href="https://github.com/gabrielsanchez5985/calcularbrejalitro">Github</a>.</p>
      </footer>
    </div>
  );
}

export default App;
