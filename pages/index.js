import Sidebar from './Sidebar'
import Home from './Home'
import image1 from "../public/images/image1.jpeg"

function Index() {
  return (
    <div className='flex'>
      <Sidebar />
      <Home />
    </div>
  )
}
export default Index;
