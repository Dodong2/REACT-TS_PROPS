//Title

interface TitleHolder {
    title: string;
}

const Title:React.FC<TitleHolder> = ({ title }) => {
  return (
    <div><h1>{title}</h1></div>
  )
}

export default Title