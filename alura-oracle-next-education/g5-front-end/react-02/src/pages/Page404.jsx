import image from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

const Page404 = () => {
  return (
    <main className='container flex flex--center flex--column'>
        <img src={image} alt="Doguito" className="dog-image" />
        <p className="notfound-text">Este Lomito no puede encontrar la página que buscas :(</p>
    </main>
  );
};
export default Page404;
