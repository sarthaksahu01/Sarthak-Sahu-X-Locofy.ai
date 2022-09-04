import { FunctionComponent, useCallback } from "react";
import styles from "./Movies.module.css";

type MoviesType = {
  onClose?: () => void;
};

const Movies: FunctionComponent<MoviesType> = ({ onClose }) => {
  const onRectangleButtonClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/tamil");
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/hindi");
  }, []);

  const onGroupButtonClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/hindi");
  }, []);

  const onRectangleButton2Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/telugu");
  }, []);

  const onGroupButton1Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/telugu");
  }, []);

  const onRectangleButton3Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/english");
  }, []);

  const onGroupButton2Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/english");
  }, []);

  const onRectangleButton4Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/kannada");
  }, []);

  const onGroupButton3Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/languages/kannada");
  }, []);

  return (
    <div className={styles.moviesDiv}>
      <div className={styles.groupDiv}>
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
              <div className={styles.hindiDiv}>Hindi</div>
            </button>
            <button
              className={styles.groupButton1}
              onClick={onGroupButton1Click}
            >
              <button
                className={styles.rectangleButton1}
                onClick={onRectangleButton2Click}
              />
              <div className={styles.teleguDiv}>Telegu</div>
            </button>
            <button
              className={styles.groupButton2}
              onClick={onGroupButton2Click}
            >
              <button
                className={styles.rectangleButton1}
                onClick={onRectangleButton3Click}
              />
              <div className={styles.englishDiv}>{`English `}</div>
            </button>
            <button
              className={styles.groupButton3}
              onClick={onGroupButton3Click}
            >
              <button
                className={styles.rectangleButton1}
                onClick={onRectangleButton4Click}
              />
              <div className={styles.kannadaDiv}>Kannada</div>
            </button>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv} />
              <div className={styles.marathiDiv}>Marathi</div>
            </div>
          </div>
          <div className={styles.tamilDiv}>Tamil</div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
