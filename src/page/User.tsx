//step2 Passing Children and Complex Data

import Card1 from "../components/Card1"


const User:React.FC = () => {

    const user =  {
        name: 'Carl Arocha',
        age: 21,
        email: 'secret'
    }

  return (
    <>
      <Card1 user={user}/>
    </>
  )
}

export default User
