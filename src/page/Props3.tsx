//step2 Passing Children and Complex Data
import Button1 from '../components/Button1'
import Button2 from '../components/Button2'
import Card from '../components/Card'

const Props3 = () => {

  const HandleAlert = () => {
    alert('Button inside a CardProps')
  }

  return (
    <>
      <Card>
        <Button1 label='button inside card'></Button1>
        <Button2  label='card' onClick={HandleAlert} style={{ backgroundColor: 'red', color: 'white'}} ></Button2>
      </Card>
    </>
  )
}

export default Props3