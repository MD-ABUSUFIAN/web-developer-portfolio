
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';

import './App.css';
import Home from './Pages/Home/Home';

function App() {


  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <div >
       {/* <Particles 
       params={{
      particles:{
        number:{
          value:50,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:"#f9ab00"
          }

        }
      }
    }}/> */}
     <Home></Home>
    </div>
  );
}

export default App;
