import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"ElkaMaclaud, nextjs" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
