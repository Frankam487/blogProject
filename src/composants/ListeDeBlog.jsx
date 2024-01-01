import  propTypes  from "prop-types";

const ListeDeBlog = ({ personne }) => {
  ListeDeBlog.propTypes = {
    personne: propTypes.type,
    name: propTypes.type,
    title: propTypes.type,
  };
  return (
    <div className="BlogList">
      <div className="listPersonnes">
        <h2>{personne.title}</h2>
        <p>Publié par: {personne.name}</p>
        <i>
          Publié le: {""}
          {personne.date}
        </i>
      </div>
    </div>
  );
};

export default ListeDeBlog;
