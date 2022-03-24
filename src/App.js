import './App.css';
import Contact from './components/Contact/Contact';
import Info from './components/Info/Info';
import Picture from './components/Picture/Picture';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  return (
    <>
   

            <div className='card'>

              <div>

                  <Picture/>
                  <Contact/>
                  <Info/>
                  <SocialMedia/>
                  
              </div>

          </div>

      

    </>
  );
}

export default App;
