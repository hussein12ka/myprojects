import QuList from './QuList'
import FormLabel from './FormLabel'
import { Button } from 'react-bootstrap'
import Dataquestion from '../data/Dataquestion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
const Question = () => {
  const [data, setData] = useState(Dataquestion)
  // add to array 
  const addItemm = () => {
    localStorage.setItem("items", JSON.stringify([...Dataquestion]))
    setData([...Dataquestion])
    notify("تمت الاضافة بنجاح ","Success")
  }
  //delate from array 
  const DelatItem = () => {
    localStorage.removeItem("items", JSON.stringify([...Dataquestion]))
    Dataquestion.splice(0, Dataquestion.length)
    setData([])
    notify("تمت مسح الكل بنجاح ","Success")
  }
  //delate 1 item from array 
  const Delatone = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]))
    setData([...items])
    notify("تمت مسح العنصر بنجاح ","Success")
    if (items.length <= 0) {
      DelatItem();
    }
  }
  //to push notifaction
  const notify = (message, type) => {
    if (type==="Error")
      toast.error(message)
    else if (type==="Success")
      toast.success(message)
  };
  return (
    <div dir='rtl'>
      <p>الاسئلة والاجوبة الشائعة</p>
      <FormLabel onAdd={addItemm}  notify={notify}/>
      <QuList data={data} Delatone={Delatone} />
      {
        data.length >= 1 ? (<Button onClick={DelatItem}> مسح الكل </Button>) : null
      }
      <ToastContainer />
    </div>
  )
}
export default Question
