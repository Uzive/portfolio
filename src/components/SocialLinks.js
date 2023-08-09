import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/Uzive">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/johnrey.dioquino.35?mibextid=ZbWKwL">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fuuccee_uzi%3Figshid%3DNGExMmI2YTkyZg%253D%253D%26fbclid%3DIwAR3JBnBwwhImnm56p-Gy74XKct692T7K-rOG_SkmQHQquUbx-YYiLp7ifZY&h=AT1df2olEApFxB1DAZA4elEaGaPUo1lygxQPWFb7tSQw9WkiLegu9sKrtIyCz6leO52aUF-97ZAiEN3fnsLAIzf-5NbCXKNF6mj-2AkmrnLk8NTwTY75svzs8WFniHeHYGCeog">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;