import { Link } from 'react-router-dom'; //eslint-disable-line
import Navbar from './components/Navbar/Navbar.jsx'; //eslint-disable-line
import Footer from './components/Footer/Footer.jsx'; //eslint-disable-line
import './App.css';

function App () {
  const sections = [
    {
      link: '/',
      text: 'Home'
    },
    {
      link: '/categories',
      text: 'Categories',
      content: [
        {
          link: '/categories/technology',
          text: 'Technology'
        },
        {
          link: '/categories/clothes',
          text: 'Clothes'
        },
        {
          link: '/categories/food',
          text: 'Food'
        },
        {
          link: '/categories/music',
          text: 'Music'
        },
        {
          link: '/categories/books',
          text: 'Books'
        },
        {
          link: '/categories/movies',
          text: 'Movies'
        },
        {
          link: '/categories/games',
          text: 'Games'
        },
        {
          link: '/categories/other',
          text: 'Other'
        }
      ]
    },
    {
      link: '/products',
      text: 'Products',
      content: [
        {
          link: '/categories/products/iphone',
          text: 'iPhone'
        },
        {
          link: '/categories/products/ipad',
          text: 'iPad'
        },
        {
          link: '/categories/products/ipod',
          text: 'iPod'
        },
        {
          link: '/categories/products/imac',
          text: 'iMac'
        },
        {
          link: '/categories/products/macbook',
          text: 'Macbook'
        }
      ]
    },
    {
      link: '/features',
      text: 'Features',
      content: [
        {
          link: 'features/phones',
          text: 'Phones'
        },
        {
          link: 'features/notebooks',
          text: 'Notebooks'
        },
        {
          link: 'features/home',
          text: 'Home'
        }
      ]
    },
    {
      link: '/blog',
      text: 'Blog',
      content: [
        {
          link: '/blog/news',
          text: 'News'
        },
        {
          link: '/blog/posts',
          text: 'Posts'
        },
        {
          link: '/blog/trending',
          text: 'Trending'
        }
      ]
    },
    {
      link: '/about-us',
      text: 'About Us',
      content: [
        {
          link: '/about-us/team',
          text: 'Team'
        },
        {
          link: '/about-us/contact',
          text: 'Contact'
        },
        {
          link: '/about-us/services',
          text: 'Services'
        },
        {
          link: '/about-us/partners',
          text: 'Partners'
        }
      ]
    },
    {
      link: '/join-us',
      text: 'Join Us'
    }
  ];

  return (
    <div className='App'>
      <Navbar links={sections} Link={Link} />
      <h1>Hola mundo</h1>
      <Footer links={sections} Link={Link} />
    </div>
  );
}

export default App;
