
import './App.css'
import Calender from './components/Calender'
import CreateEvent from './components/CreateEvent'

const App = () => {
  return (
    <div className="App">
      <h1>Timetabled Calender 📅</h1>
      <small>*ReactJS*</small>
      <h2>Add events to your calender and view them in a timetabled format </h2>
      <CreateEvent />
      <Calender />
    </div>
  )
}



export default App


// emoji list:
// https://unicode.org/emoji/charts/full-emoji-list.html



