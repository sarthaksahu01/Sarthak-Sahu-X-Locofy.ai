import { FunctionComponent } from "react";
import styles from "./Drawer.module.css";

type DrawerType = {
  onClose?: () => void;
};

const Drawer: FunctionComponent<DrawerType> = ({ onClose }) => {
  return (
    <div className={styles.drawerDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.channelsDiv}>Genres</div>
          <img className={styles.tv1Icon} alt="" src="../tv-1@2x.png" />
        </div>
        <div className={styles.rectangleDiv2}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.channelsDiv1}>Languages</div>
          <img className={styles.tv1Icon} alt="" src="../tv-11@2x.png" />
        </div>
        <div className={styles.rectangleDiv4}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.channelsDiv2}>channels</div>
          <img className={styles.tv1Icon} alt="" src="../tv-12@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
