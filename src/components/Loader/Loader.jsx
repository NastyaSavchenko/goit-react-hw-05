import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#e50914"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
