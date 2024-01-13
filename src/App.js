import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categoties from './components/Categories';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categoties />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock title="Мексиканская" price={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
