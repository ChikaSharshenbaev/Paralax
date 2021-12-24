
import './App.css';
import './app.scss';

function App() {
  const cards = document.querySelector(".cards");
  const images = document.querySelectorAll(".card__img");
  const backgrounds = document.querySelectorAll(".card__bg");
  const range = 40;

  // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
  const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1) // thanks @alice-mx

  let timeout;
  document.addEventListener('mousemove', ({ x, y }) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

      [].forEach.call(images, (image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      [].forEach.call(backgrounds, (background) => {
        background.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`;
      })
    })
  }, false);





  return (
    <div classNameName="App">
      <div className="cards">
        <h3>Movies</h3>
        <h1>Popular</h1>
        <div className="card card__one">
          <div className="card__bg"></div>
          <img className="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png" />
          <div className="card__text">
            <p className="card__title">Princess Mononoke</p>
          </div>
        </div>
        <div className="card card__two">
          <div className="card__bg"></div>
          <img className="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png" />
          <div className="card__text">
            <p className="card__title">Spirited Away</p>
          </div>
        </div>
        <div className="card card__three">
          <div className="card__bg"></div>
          <img className="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png" />
          <div className="card__text">
            <p className="card__title">Howl's Moving Castle</p>
          </div>
        </div>
      </div>

      <span className="notice">view on desktop for mousemove</span>
      <a className="twitter__link" target="_blank" href="https://twitter.com/intent/tweet?text=Check%20out%20this%203D%20CSS%20depth%20effect%20from%20@dazulu&via=CodePen%20&hashtags=codepen%2cfrontend&url=https://codepen.io/dazulu/details/VVZrQv/"><img className="twitter__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/twitter.svg" /> Share</a>
    </div>
  );
}

export default App;
