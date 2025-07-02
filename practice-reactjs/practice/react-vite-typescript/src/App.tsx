import './App.css'
import SearchButton from './components/SearchButton'
import Button from './components/Button';
import MatchScoreCard from './components/MatchScoreCard';
import TeamCard from './components/TeamCard';
import CreditCardInfo from './components/CreditCardInfo';
import DashboardStatusCard from './components/DashboardStatusCard';
import LocationCard from './components/LocationCard';
import ScheduleSuggestionCard from './components/ScheduleSuggestionCard';
import WeekForecastCard from './components/WeekForecastCard';
import ScheduleDetailCard from './components/ScheduleDetailCard';
import { Search, CircleEqual, Settings2, Phone, ArrowRight, Apple, Chrome, Facebook } from 'lucide-react';
import { BsThreeDots } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { IoPartlySunnyOutline } from "react-icons/io5";

function App() {
  return (
    <>
      <div className='exercise'>
        <section id='exercise5'>
          <LocationCard imgSrc="/Avt/landescape.jpg" locationName="Landescape" locationInfo="423Km" icon={<BsThreeDots />} bgColor='#FAFFDB'/>
          <LocationCard imgSrc="/Avt/falset.jpg" locationName="Falset Mountains" locationInfo="423Km, 3 Week" icon={<img src="/Icon/cloudy-sun-rays.jpg"/>} />
          <ScheduleSuggestionCard leftIcon={<IoPartlySunnyOutline />} title="Great day to schedule" subtitle="Lorem ipsum dolor sitamet." rightIcon={<FaCirclePlay />} bgColor='#EDF8FF'/>
          <WeekForecastCard/>
          <ScheduleDetailCard title='Great day to schedule' subtitle='Your usual hours'/>
        </section>
        <section id='exercise3'>
          <MatchScoreCard/>
          <TeamCard/>
          <CreditCardInfo/>
          <DashboardStatusCard/>
          
        </section>
        <section id='exercise1'>
          <Button label='Get Started' rightIcon={<ArrowRight/>}/>
          <Button label='Continue with Apple' leftIcon={<Apple/>}/>
          <Button type='outline' label='Continue with Google' leftIcon={<Chrome/>}/>
          <Button type='outline' label='Continue with Facebook' leftIcon={<Facebook/>}/>
        </section>
        <section id='exercise2'>
          <SearchButton leftIcon={<Search/>}/>
          <SearchButton leftIcon={<Search/>} text='Search'/>
          <SearchButton type='text' leftIcon={<Search/>} text='Textfield'/>
          <SearchButton leftIcon={<Search/>} text='Search in the web' rightIcon={<CircleEqual/>}/>
          <SearchButton leftIcon={<Search/>} text='Search crypto' rightIcon={<Settings2/>}/>
          <SearchButton text='Phone number' rightIcon={<span style={{backgroundColor:'#D3FFD8',borderRadius: 20, padding:8}}><Phone/></span>}/>
          <SearchButton leftIcon={<Search/>} text='Search in the web' rightIcon={<span style={{backgroundColor:'#FFE664',borderRadius: 20, padding:8}}><CircleEqual/></span>}/>
        </section>
      
      </div>
    </>
  )
}

export default App
