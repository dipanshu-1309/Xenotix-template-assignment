import styles from './Uiux.module.css';

const Uiux = () => {
  return (
    <div className={styles['frame-13']}>
      <div className={styles['heading']}>UI/UX Designing</div>
      <div className={styles['line']}></div>
      <div className={styles['longtext']}>
        Crafting intuitive, aesthetic, and user-friendly digital experiences
      </div>

      <div className={styles['circle-1']}></div>
      <div className={styles['circle-2']}></div>

      <div className={styles['box1']}>
        <img
          className={styles["image"]}
          src="/assets/images/F.png"
          alt="figma"
          style={{ width: "8px", height: "8px", transform: "rotate(20.86deg)" }}
        />
        <div className={styles["text"]} style={{ marginLeft: "0px" }}>Figma</div>
      </div>

      <div className={styles['box2']}>
        <img
          className={styles["image"]}
          src="/assets/images/XD.png"
          alt="adobe-xd"
          style={{ width: "8px", height: "8px", transform: "rotate(20.86deg)" }}
        />
        <div className={styles["text"]}>Adobe XD</div>
      </div>

      <div className={styles['box3']}>
        <img
          className={styles["image"]}
          src="/assets/images/DASH.png"
          alt="wireframe"
          style={{ width: "13px", height: "13px", transform: "rotate(20.86deg)" }}
        />
        <div className={styles["text"]} style={{ marginLeft: "-2px" }}>Wireframe</div>
      </div>

      <div className={styles['box4']}>
        <img
          className={styles["image"]}
          src="/assets/images/TAB.png"
          alt="prototype"
          style={{ width: "8px", height: "8px", transform: "rotate(20.86deg)" }}
        />
        <div className={styles["text"]}>Prototype</div>
      </div>

      <div className={styles['box5']}>
        <img
          className={styles["image"]}
          src="/assets/images/Vector-7.png"
          alt="design-system"
          style={{ width: "8px", height: "6px", transform: "rotate(-8.86deg)" }}
        />
        <div className={styles["text"]}>Design System</div>
      </div>

      <img
        src="/assets/images/Ellipse47.png"
        alt="ellipse47"
        className={styles['ellipse-47']}
      />
    </div>
  );
};

export default Uiux;
