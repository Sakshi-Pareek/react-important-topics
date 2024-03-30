import './App.css';
import AccodianInTailwind from './components/AccodianInTailwind';
import AccorByFamerMotion from './components/AccorByFamerMotion';
import ApiUseEffect from './components/ApiUseEffect';
import Clock from './components/Clock';
import CounterAppByUseReducer from './components/CounterAppByUseReducer';
import CustomPopUp from './components/CustomPopUp';
import { Emailjs } from './components/Emailjs';
import FormSub from './components/FormSub';
// import FormValid from './components/FormValid';
import Modal from './components/Modal';
import NavBarSec from './components/NavBarSec';
import PrintValueInTable from './components/PrintValueInTable';
import SplideSlider from './components/SplideSlider';
import StyleCompo from './components/StyleCompo';
import SwiperSlider from './components/SwiperSlider';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <NavBarSec />
      <AccodianInTailwind />
      <AccorByFamerMotion />
      <CounterAppByUseReducer />
      <Emailjs />
      <FormSub />
      <Modal />
      <Clock />
      <ApiUseEffect />
      <TodoList />
      <SplideSlider />
      <SwiperSlider />
      <CustomPopUp />
      <PrintValueInTable />
      <StyleCompo />
      {/* <FormValid /> */}
    </>
  );
}

export default App;
