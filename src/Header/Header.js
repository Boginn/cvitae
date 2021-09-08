import './Header.css';

const Header = (props) => {
  const { image, title, subTitle } = props;

  return (
    <header className="headerWrapper ">
      <div>
        <h1 className="headerTitle">{title}</h1>
        <h2 className="headerSubTitle headerFade">{subTitle}</h2>
      </div>
      <div>
        <img className="headerImage" src={image} alt="Subject" />
      </div>
    </header>
  );
};

export default Header;
