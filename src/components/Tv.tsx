import { FunctionComponent, useCallback } from "react";
import styles from "./Tv.module.css";

type TvType = {
  onClose?: () => void;
};

const Tv: FunctionComponent<TvType> = ({ onClose }) => {
  const onRectangleButtonClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/channels/starplus");
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/movies/languages/odia");
  }, []);

  const onGroupButtonClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/movies/languages/odia");
  }, []);

  const onRectangleButton2Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/channels/asianet");
  }, []);

  const onGroupButton1Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/channels/asianet");
  }, []);

  const onRectangleButton3Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/channels/quix");
  }, []);

  const onGroupButton2Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/channels/quix");
  }, []);

  return (
    <div className={styles.tvDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.groupDiv}>
            <div className={styles.groupDiv}>
              <button
                className={styles.rectangleButton}
                onClick={onRectangleButtonClick}
              />
              <div className={styles.groupDiv}>
                <button
                  className={styles.groupButton}
                  onClick={onGroupButtonClick}
                >
                  <button
                    className={styles.rectangleButton1}
                    onClick={onRectangleButton1Click}
                  />
                  <div className={styles.odiaDiv}>Odia</div>
                </button>
                <div className={styles.groupDiv5}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.starBharatDiv}>Star Bharat</div>
                </div>
                <div className={styles.groupDiv6}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.starBharatDiv}>Star Jalsha</div>
                </div>
                <button
                  className={styles.groupButton1}
                  onClick={onGroupButton1Click}
                >
                  <button
                    className={styles.rectangleButton1}
                    onClick={onRectangleButton2Click}
                  />
                  <div className={styles.asianetDiv}>Asianet</div>
                </button>
                <button
                  className={styles.groupButton2}
                  onClick={onGroupButton2Click}
                >
                  <button
                    className={styles.rectangleButton1}
                    onClick={onRectangleButton3Click}
                  />
                  <div className={styles.odiaDiv}>Quix</div>
                </button>
              </div>
              <div className={styles.starPlusDiv}>Star Plus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tv;
