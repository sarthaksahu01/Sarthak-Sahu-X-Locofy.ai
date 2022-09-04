import { FunctionComponent, useCallback } from "react";
import styles from "./Sports.module.css";

type SportsType = {
  onClose?: () => void;
};

const Sports: FunctionComponent<SportsType> = ({ onClose }) => {
  const onRectangleButtonClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/football");
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/cricket");
  }, []);

  const onGroupButtonClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/cricket");
  }, []);

  const onRectangleButton2Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/hockey");
  }, []);

  const onGroupButton1Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/hockey");
  }, []);

  const onRectangleButton3Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/formula-1");
  }, []);

  const onGroupButton2Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/formula-1");
  }, []);

  const onRectangleButton4Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/sports/kabaddi");
  }, []);

  return (
    <div className={styles.sportsDiv}>
      <div className={styles.groupDiv}>
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButtonClick}
        />
        <div className={styles.groupDiv}>
          <button className={styles.groupButton} onClick={onGroupButtonClick}>
            <button
              className={styles.rectangleButton1}
              onClick={onRectangleButton1Click}
            />
            <div className={styles.cricketDiv}>Cricket</div>
          </button>
          <button className={styles.groupButton1} onClick={onGroupButton1Click}>
            <button
              className={styles.rectangleButton1}
              onClick={onRectangleButton2Click}
            />
            <div className={styles.hockeyDiv}>Hockey</div>
          </button>
          <button className={styles.groupButton2} onClick={onGroupButton2Click}>
            <button
              className={styles.rectangleButton1}
              onClick={onRectangleButton3Click}
            />
            <div className={styles.formula1Div}>{`Formula1 `}</div>
          </button>
          <div className={styles.groupDiv2}>
            <button
              className={styles.rectangleButton1}
              onClick={onRectangleButton4Click}
            />
            <div className={styles.kabbadiDiv}>Kabbadi</div>
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv} />
            <div className={styles.kheloIndiaDiv}>Khelo India</div>
          </div>
        </div>
        <div className={styles.footballDiv}>Football</div>
      </div>
    </div>
  );
};

export default Sports;
