import { FunctionComponent } from "react";
import styles from "./SliderComponent1.module.css";

const SliderComponent1: FunctionComponent = () => {
  return (
    <div className={styles.sliderComponent1Div}>
      <img className={styles.mc11Icon} alt="" src="../mc1-1@2x.png" />
      <img className={styles.mc22Icon} alt="" src="../mc2-2@2x.png" />
      <img className={styles.mc31Icon} alt="" src="../mc3-1@2x.png" />
      <img className={styles.mc41Icon} alt="" src="../mc3-1@2x.png" />
      <img className={styles.mc51Icon} alt="" src="../mc5-11@2x.png" />
    </div>
  );
};

export default SliderComponent1;
