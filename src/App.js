import pic1 from './images/Pride.svg';
import pic2 from './images/undraw_unicorn_dp2f.svg';
import './index.css';

function App() {
  return (
    <div className="img">
        <img className="pic1" src={pic1} alt="Olympics"/>
        <div style={{display: "block"}}>
          <h1  className="typewriter"><b>Rainbows and Unicorns</b></h1>
          <br></br>
          <h3><b>Gender and Sexuality made easy 💜</b></h3>
          <br></br>
          <br></br>
        </div>
        <img className="pic" src={pic2} alt="Programmer"/>
    </div>
  );
}
export default App;
