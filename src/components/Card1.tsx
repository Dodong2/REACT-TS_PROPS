//step1 Passing Children and Complex Data
import Card from "./Card";
interface UserProps {
    user: {
        name: string;
        age:number;
        email:string;
    }
}

const Card1:React.FC<UserProps> = ({ user }) => {
  return (
    <>
    <Card>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.email}</h1>
    </Card>
    </>
  )
}

export default Card1