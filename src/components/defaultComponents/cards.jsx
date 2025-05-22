import "./DefaultsStyle.css";
import { Link } from "react-router-dom";
function Cards({ Content, size, controledByGrid, onClick, link }) {
  const { thumbnail, title, description, avatar } = Content;
  const sizes = [
    "auto",
    "small", // min-10rem, ideal-20vw, max-14rem
    "medium", // min-22rem, ideal-30vw, max-28rem
    "large", // min-28rem, ideal-50vw, max-40rem
  ];
  console.log(sizes);
  return (
    <div
      className={`card m-3 bg-[#1c1d22] z-70 text-black relative aspect-16/9 ${onClick?"cursor-pointer":""} ${
        controledByGrid ? "auto" : size
      }`}
    >
      {link? <Link className="inset-0 z-80 absolute" to={`/video/${link}`} ></Link> : null }
      <img src={thumbnail} alt={title} className="card-image" />
      <div className="card-info">
        <div className="avatar">
          <img
            src={avatar}
            alt="Avatar"
          />
        </div>
        <div className="text-content">
          <h1>{title}</h1>
          <h2 data-text="Nome do Educador">Nome do Educador</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
export default Cards;
