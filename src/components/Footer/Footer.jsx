import style from './Footer.module.css';

export default function Footer ({ links, Link }) {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container_categories}>
        {
          links.map(({ text, content }) => {
            return text !== 'Home'
              ? <div className={style.categories}>
                  {text}
                  <ul className={style.categories_container}>
                    {
                      content?.map(({ link, text }) => {
                        return (
                          <Link to={link} key={text}>
                            <li>{text}</li>
                          </Link>
                        );
                      })
                    }
                  </ul>
                </div>
              : '';
          })
        }
      </div>
    </footer>
  );
}
