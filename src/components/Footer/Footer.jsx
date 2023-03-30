import style from './Footer.module.css';

export default function Footer ({ links, Link }) {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container_categories}>
        {
          links.map(({ link, text, content }) => {
            return (
              <Link to={link} key={text}>
                <ul className={style.categories_container}>
                  {
                    content?.map(item => {
                      return (
                        <li key={item}>{item}</li>
                      );
                    })
                  }
                </ul>
              </Link>
            );
          })
        }
      </div>
    </footer>
  );
}
