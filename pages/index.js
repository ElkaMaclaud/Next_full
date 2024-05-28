import Link from "next/link";

const Index = () => {
  return (
    <div>
      <div className="navbar">
        <Link href="/" legacyBehavior>
          <a className="link">Главная</a>
        </Link>
        <Link href="/users" legacyBehavior>
          <a className="link">Пользователи</a>
        </Link>
        <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
            .link {
              text-decoration: none;
              color: white;
              font-size: 20px;
              margin: 10px;
            }
          `}
        </style>
      </div>
      <h1>Главная страница</h1>
    </div>
  );
};

export default Index;
