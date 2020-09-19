import WorkInProgress from "../../public/workinprogress.svg";

const Recent = (props) => {
  return (
    <div className="recente_container" id="#recente_container">
      <img
        src="/workinprogress.svg"
        alt="work in progress"
        className="workinprogress"
      />
      <span className="alert">Página em construção</span>
    </div>
  );
};

export default Recent;
