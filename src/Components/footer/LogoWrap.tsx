import Logo from "../navbar/Logo";
import instagram from "../../assets/instagram.png";

const LogoWrap = () => {
  const sosmed = [
    {
      img: instagram,
    },
  ];
  return (
    <div className="flex flex-col gap-y-6 text-justify">
      <Logo />
      <p className="max-w-[300px] text-xs text-slate-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
        illo inventore! Odit, laborum dolores ratione repellendus incidunt non
        iure mollitia voluptate labore aut accusantium minima suscipit saepe
        error sequi omnis?
      </p>
      <div>
        {sosmed.map((item) => (
          <div>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoWrap;
