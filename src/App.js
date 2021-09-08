import './App.css';
import data from './data';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const { title, subTitle, image } = data.header;
const { email } = data.footer;

const App = () => {
  return (
    <div className="App">
      <Header subTitle={subTitle} title={title} image={image} />

      <Content />
      <Footer email={email} />
    </div>
  );
};

export default App;
