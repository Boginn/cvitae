import './Header.css';

// const styles = {
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'spaceBetween',
//     paddingLeft: '30px',
//     backgroundColor: '#383d47',
//     textShadow: '1px 1px black',
//     color: 'white',
//   },
// };
// style={styles.wrapper} - doesn't work, check later

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
