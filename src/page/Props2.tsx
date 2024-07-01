//Step1 Passing Multiple Props
import Button2 from "../components/Button2"

const Props2 = () => {

    const HandleAlert = () => {
        alert('try lang')
    }

    return (
    <>
    <Button2 label="Click me" onClick={HandleAlert} style={{ backgroundColor: 'blue', color: 'white'}}></Button2>
    </>
  )
}

export default Props2