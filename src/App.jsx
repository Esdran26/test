import Main from './components/Main'
import MenuLateral from './components/MainComponents/MenuLateral/MenuLateral'

function App() {

  return (
 <>
   <div className='md:flex rounded-full'>
   <div className='md:w-1/4 lg:w-[200px] '>
    <MenuLateral />
  </div>
  <div className='w-full'>
    <Main />
  </div>
   </div>
 </>
  )
}

export default App;