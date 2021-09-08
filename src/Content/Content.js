import './Content.css';
import data from '../data';


const { content } = data;

const Content = () => {
  return (
    <>

    <ul className="entryWrapper">
      {content.map((item, index) => (
        <Entry key={index} item={item} />
      ))}
    </ul>
    
    </>
  );
};
const Entry = (props) => {
  const {item} = props
  return (
    <li className="entryItem">
      <h1>{item.title}</h1>

      <p>{item.text}</p>
    </li>
  );
};

export default Content;
