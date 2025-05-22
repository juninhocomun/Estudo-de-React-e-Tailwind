import Cards from "/src/components/defaultComponents/cards.jsx";
import "./homecontent.css";

function HomeContent() {
  const card = {
    thumbnail: "https://i.ytimg.com/vi/IVbbh6dHYAc/maxresdefault.jpg",
    title: "Título do Card",
    description: "Descrição do conteúdo educativo",
    avatar:"https://hentaiwikis.com/wp-content/uploads/2024/03/Genshin-Impact-Hentai-%E2%80%93-Aqua-Porn-konosuba-4.jpg.webp" ,
  };
  const sizes = [
    "auto",
    "small", // min-10rem, ideal-20vw, max-14rem
    "medium", // min-22rem, ideal-30vw, max-28rem
    "large", // min-28rem, ideal-50vw, max-40rem
  ];
  const cards = Array.from({ length: 12 }, () => card);

  return (
    <div className="container">
      {cards.map((card, index) => (
      <Cards key={index} Content={card} size={sizes[2]} controledByGrid={true} onClick={true} link={true}/>
    ))}
    </div>
  );
}

export default HomeContent;
