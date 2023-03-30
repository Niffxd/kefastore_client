import style from './Navbar.module.css';

export default function Navbar ({ links, Link }) {
  return (
    <nav className={style.navbar}>
      <div className={style.container_nav}>
        <img src='' alt='logo' />
        <ul className={style.links_nav}>
          {
            links.map(({ link, text }) => {
              return (
                <Link key={text} to={link}>
                  <li>{text}</li>
                </Link>
              );
            })
          }
        </ul>
      </div>
      <div>
        <Link><button className={style.sign_in}>Sign In</button></Link>
        <Link><button className={style.sign_up}>Sign Up</button></Link>
      </div>
    </nav>
  );
}
