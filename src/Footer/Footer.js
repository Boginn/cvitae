import './Footer.css';

const Footer = (props) => {
  const { email } = props;

  return (
<div>

<hr />
<p className="contactInfo">{email}</p>
</div>
  );
};

export default Footer;
