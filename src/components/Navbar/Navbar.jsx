import style from './Navbar.module.css';

export default function Navbar () {
  const links = [
    {
      link: '/',
      text: 'Home'
    },
    {
      link: '/categories',
      text: 'Categories'
    },
    {
      link: '/products',
      text: 'Products'
    },
    {
      link: '/features',
      text: 'Features'
    },
    {
      link: '/blog',
      text: 'Blog'
    },
    {
      link: '/about-us',
      text: 'About Us'
    },
    {
      link: '/join-us',
      text: 'Join Us'
    }
  ];

  return (
    <div className={style.navbar}>
      <div className={style.container_nav}>
        <img src='' alt='logo' />
        <ul className={style.links_nav}>
          {
            links.map(({ link, text }) => {
              return (
                <li key={link}>{text}</li>
              );
            })
          }
        </ul>
      </div>
      <div>
        <button className={style.sign_in}>Sign In</button>
        <button className={style.sign_up}>Sign Up</button>
      </div>
    </div>
  );
}
