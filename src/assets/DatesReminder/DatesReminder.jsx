import { useEffect, useState } from 'react'
import { DatesAction, DatesList, DatesCount } from '../../../public/link'
import person from '../data/DatesRe'
const DatesReminder = () => {

  const [personData, setPersonData] = useState(person)
  const onDalet = () => {
    setPersonData([])
  } 
  const onViowData = () => {
    setPersonData(person)
  }
  useEffect(() => {
    setPersonData([])
     
    }, [])
  return (

    <div className="font color-body" dir='rtl'>
      <DatesCount person={personData} />
      <DatesList person={personData} />
      <DatesAction onDaletall={onDalet} onviewAll={onViowData} />
    </div>
  )
}
export default DatesReminder