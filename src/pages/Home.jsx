import { useState } from "react";
import ListeDeBlog from "../composants/ListeDeBlog";

const Home = () => {
  const datas = [
    {
      id: 1,
      title: "programmation",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius inventore ut optio repellat tenetur consequuntur autem quisquam neque dicta?",
      name: "Frank",
      date: "01/01/2024",
    },
    {
      id: 2,
      title: "video",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius inventore ut optio repellat tenetur consequuntur autem quisquam neque dicta?",
      name: "Franco",
      date: "01/01/2024",
    },
    {
      id: 3,
      title: "design",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius inventore ut optio repellat tenetur consequuntur autem quisquam neque dicta?",
      name: "Frank",
      date: "01/01/2024",
    },
  ];
  const [personnes, setPersonnes] = useState(datas);
  const liste = personnes.map((personne, index) => (
    <ListeDeBlog key={index} personne={personne} />
  ));
  return (
    <div className="home">
      <div className="entete">
        <h2>App_Blog</h2>
        <div className="navigation">
          <p className="p1">Acceuil</p>
          <p>Ajouter</p>
        </div>
      </div>
      {liste}
    </div>
  );
};

export default Home;
