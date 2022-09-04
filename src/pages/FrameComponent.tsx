import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { TextField } from "@mui/material";
import Drawer from "../components/Drawer";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Tv from "../components/Tv";
import Movies from "../components/Movies";
import Sports from "../components/Sports";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [isTvOpen, setTvOpen] = useState(false);
  const [isMoviesOpen, setMoviesOpen] = useState(false);
  const [isSportsOpen, setSportsOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const onAboutDisneyHostarButtonClick = useCallback(() => {
    navigate("/drawer");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/about-us");
  }, []);

  const onTermsOfUseClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/terms-of-use");
  }, []);

  const onGroupButton2Click = useCallback(() => {
    window.open("https://www.hotstar.com/in/terms-of-use");
  }, []);

  const onPrivacyPolicyButtonClick = useCallback(() => {
    window.open("https://www.hotstar.com/in/privacy-policy");
  }, []);

  const onFAQButtonClick = useCallback(() => {
    window.open("https://help.hotstar.com/in/en/support/home");
  }, []);

  const onFeedbackButtonClick = useCallback(() => {
    window.open("https://help.hotstar.com/in/en/support/tickets/new");
  }, []);

  const onFeedbackButton1Click = useCallback(() => {
    window.open("https://help.hotstar.com/in/en/support/tickets/new");
  }, []);

  const onCareerButtonClick = useCallback(() => {
    window.open("https://careers.hotstar.com/");
  }, []);

  const onConnectWithUsClick = useCallback(() => {
    navigate("/drawer");
  }, [navigate]);

  const openTv = useCallback(() => {
    setTvOpen(true);
  }, []);

  const closeTv = useCallback(() => {
    setTvOpen(false);
  }, []);

  const openMovies = useCallback(() => {
    setMoviesOpen(true);
  }, []);

  const closeMovies = useCallback(() => {
    setMoviesOpen(false);
  }, []);

  const openSports = useCallback(() => {
    setSportsOpen(true);
  }, []);

  const closeSports = useCallback(() => {
    setSportsOpen(false);
  }, []);

  const onFLogoButtonClick = useCallback(() => {
    window.open("https://www.facebook.com/DisneyPlusHotstar");
  }, []);

  const onTLogoButtonClick = useCallback(() => {
    window.open("https://twitter.com/DisneyPlusHS");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.frameDiv}>
        <button className={styles.groupButton} onClick={openDrawer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
        </button>
        <div className={styles.watchlistDiv}>Watchlist</div>
        <div className={styles.groupDiv}>
          <div className={styles.latestTrending}>{`Latest & Trending`}</div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.latestTrending}>Best in Sports</div>
        </div>
        <button className={styles.groupButton1} onClick={onGroupButton1Click}>
          <button
            className={styles.aboutDisneyHostarButton}
            onClick={onAboutDisneyHostarButtonClick}
          >
            About Disney+Hostar
          </button>
        </button>
        <button className={styles.groupButton2} onClick={onGroupButton2Click}>
          <button className={styles.termsOfUse} onClick={onTermsOfUseClick}>
            Terms Of Use
          </button>
        </button>
        <div className={styles.groupDiv2}>
          <button
            className={styles.aboutDisneyHostarButton}
            onClick={onPrivacyPolicyButtonClick}
          >
            Privacy Policy
          </button>
          <button className={styles.fAQButton} onClick={onFAQButtonClick}>
            FAQ
          </button>
          <button
            className={styles.feedbackButton}
            onClick={onFeedbackButtonClick}
          >
            Feedback
          </button>
          <button
            className={styles.feedbackButton}
            onClick={onFeedbackButton1Click}
          >
            Feedback
          </button>
          <button className={styles.careerButton} onClick={onCareerButtonClick}>
            Career
          </button>
          <div className={styles.connectWithUs} onClick={onConnectWithUsClick}>
            Connect With Us
          </div>
          <div className={styles.disneyHotstarAppDiv}>Disney+Hotstar App</div>
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.disneyHostarDiv}>
            <span>Disney</span>
            <span className={styles.hostarSpan}>+Hostar</span>
          </div>
          <button className={styles.tVButton} onClick={openTv}>{`TV `}</button>
          <button className={styles.moviesButton} onClick={openMovies}>
            Movies
          </button>
          <button className={styles.sportsButton} onClick={openSports}>
            Sports
          </button>
          <div className={styles.disneyDiv}>{`Disney+ `}</div>
          <div className={styles.kidsDiv}>Kids</div>
        </div>
        <form className={styles.groupForm} placeholder="Search">
          <TextField
            className={styles.groupTextField}
            sx={{ width: 220.43472290039062 }}
            color="primary"
            variant="standard"
            type="text"
            placeholder="Search"
            size="medium"
            margin="none"
          />
          <img className={styles.profileIcon} alt="" src="../profile@2x.png" />
        </form>
        <img className={styles.groupIcon} alt="" src="../group-1.svg" />
        <img className={styles.groupIcon1} alt="" src="../group-2.svg" />
        <img
          className={styles.component1Icon}
          alt=""
          src="../component-1.svg"
        />
        <a
          className={styles.component2A}
          href="https://www.hotstar.com/in/movies/bhoothnath-returns/1260084560"
        >
          <img className={styles.mc11Icon} alt="" src="../mc1-1@2x.png" />
          <img className={styles.mc22Icon} alt="" src="../mc2-2@2x.png" />
          <img className={styles.mc31Icon} alt="" src="../mc3-1@2x.png" />
          <img className={styles.mc41Icon} alt="" src="../mc3-1@2x.png" />
          <img className={styles.mc51Icon} alt="" src="../mc3-1@2x.png" />
          <img className={styles.groupIcon2} alt="" src="../group-10.svg" />
          <button className={styles.groupButton3}>
            <img className={styles.groupIcon3} alt="" src="../group-8.svg" />
          </button>
        </a>
        <div className={styles.watchlistSliderDiv}>
          <a
            className={styles.w11A}
            href="https://www.hotstar.com/in/movies/cadaver/1260109485"
            target="_blank"
          />
          <a
            className={styles.w12A}
            href="https://www.hotstar.com/in/movies/the-hills-have-eyes-2/1770015345"
            target="_blank"
          />
          <a
            className={styles.w13A}
            href="https://www.hotstar.com/in/movies/the-rescue/1260074691"
            target="_blank"
          />
          <a
            className={styles.w14A}
            href="https://www.hotstar.com/in/movies/a-thursday/1260082828"
            target="_blank"
          />
        </div>
        <div className={styles.latestAndTrending}>
          <a
            className={styles.l112A}
            href="https://www.hotstar.com/in/movies/cuttputlli/1260110758"
            data-animate-on-scroll
          >
            <a
              className={styles.l111A}
              href="https://www.hotstar.com/in/movies/cuttputlli/1260110758"
              target="_blank"
            />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/tv/koffee-with-karan/1525"
          >
            <img className={styles.l111Icon} alt="" src="../l11-11@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/tv/criminal-justice-adhura-sach/1260108952"
            target="_blank"
          >
            <img className={styles.l111Icon} alt="" src="../l11-12@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/movies/heaven/1260109774"
            target="_blank"
          >
            <a
              className={styles.l111A1}
              href="https://www.hotstar.com/in/movies/heaven/1260109774"
              target="_blank"
            />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/tv/shehulk-attorney-at-law/1260103788"
            target="_blank"
          >
            <img className={styles.l111Icon} alt="" src="../l11-14@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/tv/sketch/1260109029"
            target="_blank"
          >
            <img className={styles.l111Icon} alt="" src="../l11-15@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/movies/cadaver/1260109485"
          >
            <img className={styles.l111Icon} alt="" src="../l11-16@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/movies/good-luck-jerry/1260108206"
            target="_blank"
          >
            <img className={styles.l111Icon} alt="" src="../l11-17@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/movies/vikram/1260106598"
            target="_blank"
          >
            <img className={styles.l111Icon} alt="" src="../l11-18@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/movies/doctor-strange-in-the-multiverse-of-madness/1260103761"
            target="_blank"
          >
            <img className={styles.l111Icon} alt="" src="../l11-19@2x.png" />
          </a>
          <a
            className={styles.l113A}
            href="https://www.hotstar.com/in/tv/koffee-with-karan/1525"
          >
            <img className={styles.l111Icon} alt="" src="../l11-11@2x.png" />
          </a>
        </div>
        <div className={styles.frameDiv1}>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/sports/sl-vs-afg-sl-fow/1260111680"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-2@2x.png" />
          </a>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/cricket/asia-cup-2022/706351/match-clips/ind-vs-pak-all-you-need-to-know/1260111907"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-21@2x.png" />
          </a>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/cricket/asia-cup-2022/706351/match-clips/focussing-on-our-strengths-dravid/1260112009"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-22@2x.png" />
          </a>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/cricket/asia-cup-2022/706351/match-clips/jadeja-ruled-out-of-the-tournament/1260111972"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-23@2x.png" />
          </a>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/sports/resilient-sl-leave-afg-stunned/1540017128"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-24@2x.png" />
          </a>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/sports/aston-villa-11-manchester-city/1540017641"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-25@2x.png" />
          </a>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/sports/sri-lanka-survive-gurbazs-blitz/1260111686"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-26@2x.png" />
          </a>
          <a
            className={styles.frameA}
            href="https://www.hotstar.com/in/sports/sports/fit-india-quiz-season-1-episode-1/1260111914"
            target="_blank"
          >
            <img className={styles.b12Icon} alt="" src="../b1-27@2x.png" />
          </a>
        </div>
        <div className={styles.sTARAllRightsReservedHBO}>
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </div>
        <button className={styles.fLogoButton} onClick={onFLogoButtonClick}>
          <div className={styles.rectangleDiv3} />
          <b className={styles.fB}>{`f `}</b>
        </button>
        <button className={styles.tLogoButton} onClick={onTLogoButtonClick}>
          <div className={styles.rectangleDiv4} />
          <img
            className={styles.twitterRemovebgPreview1Icon}
            alt=""
            src="../twitterremovebgpreview-1@2x.png"
          />
        </button>
        <a
          className={styles.appStoreLogo}
          href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
        >
          <div className={styles.rectangleDiv4} />
          <div className={styles.downloadOnThe}>{`Download on the `}</div>
          <div className={styles.appStoreDiv}>App Store</div>
          <img className={styles.appIcon} alt="" src="../app@2x.png" />
        </a>
        <a
          className={styles.playStoreLogo}
          href="https://apps.apple.com/in/app/hotstar/id934459219"
        >
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-9.svg"
          />
          <div className={styles.downloadOnThe1}>{`Download on the `}</div>
          <div className={styles.playStoreDiv}>Play Store</div>
          <img
            className={styles.googlePlayStore1RemovebgPIcon}
            alt=""
            src="../googleplaystore1removebgpreview-1@2x.png"
          />
        </a>
      </div>
      {isDrawerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalPopup>
      )}
      {isTvOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTv}
        >
          <Tv onClose={closeTv} />
        </PortalPopup>
      )}
      {isMoviesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMovies}
        >
          <Movies onClose={closeMovies} />
        </PortalPopup>
      )}
      {isSportsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSports}
        >
          <Sports onClose={closeSports} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent;
