import {Disp} from '../components/Disp'
import nigeria from '../assets/nigeria.png'
import './Cards.css'
export const Cards = () => {
  return (
    <div className='card'>
    <Disp img={nigeria} text="Order a Kuda card on the app with pickup and delivery options." cards="border" Text="color"/>
    <Disp img={nigeria} text="Enjoy cashless payment options online and offline." cards="border" Text="color"/>
    <Disp img={nigeria} text="Pay your essential bills and buy gift cards easily." cards="border" Text="color"/>
    <Disp img={nigeria} text="Get 25 free transfers to Nigerian banks every month." cards="border" Text="color"/>
    <Disp img={nigeria} text="Save money automatically any time you spend." cards="border" Text="color"/>
    </div>
  )
}

export default Cards