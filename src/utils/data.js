import hero from "../assets/images/hero.jpeg";
import gsap from "gsap"

import { ScrollTrigger } from "gsap/all.js"
gsap.registerPlugin(ScrollTrigger);

export const heroImg = hero;

import hmv from "../assets/videos/hero.mp4";
import smallmv from "../assets/videos/smallHero.mp4";
import highlightFirstmv from "../assets/videos/highlight-first.mp4";
import highlightSectmv from "../assets/videos/hightlight-third.mp4";
import highlightThirdmv from "../assets/videos/hightlight-sec.mp4";
import highlightFourthmv from "../assets/videos/hightlight-fourth.mp4";
import exploremv from "../assets/videos/explore.mp4";
import framemv from "../assets/videos/frame.mp4";

import apple from "../assets/images/apple.svg";
import search from "../assets/images/search.svg";
import bag from "../assets/images/bag.svg";
import watch from "../assets/images/watch.svg";
import right from "../assets/images/right.svg";
import replay from "../assets/images/replay.svg";
import play from "../assets/images/play.svg";
import pause from "../assets/images/pause.svg";

import yellow from "../assets/images/yellow.jpg";
import blue from "../assets/images/blue.jpg";
import white from "../assets/images/white.jpg";
import black from "../assets/images/black.jpg";
import explore1 from "../assets/images/explore1.jpg";
import explore2 from "../assets/images/explore2.jpg";
import chip from "../assets/images/chip.jpeg";
import frame from "../assets/images/frame.png";

export const heroVideo = hmv;
export const smallHeroVideo = smallmv;
export const highlightFirstVideo = highlightFirstmv;
export const highlightSecondVideo = highlightSectmv;
export const highlightThirdVideo = highlightThirdmv;
export const highlightFourthVideo = highlightFourthmv;
export const exploreVideo = exploremv;
export const frameVideo = framemv;

export const appleImg = apple;
export const searchImg = search;
export const bagImg = bag;
export const watchImg = watch;
export const rightImg = right;
export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const yellowImg = yellow;
export const blueImg = blue;
export const whiteImg = white;
export const blackImg = black;
export const explore1Img = explore1;
export const explore2Img = explore2;
export const chipImg = chip;
export const frameImg = frame;
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
} 