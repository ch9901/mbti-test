import infj from "./contents/img/vodka.png";
import enfj from "./contents/img/tonicwater.png";
import infp from "./contents/img/milkjelly.png";
import intp from "./contents/img/ojing.png";
import isfp from "./contents/img/redbull.png";
import istj from "./contents/img/mintcandy.png";
import estj from "./contents/img/honey.png";
import esfj from "./contents/img/ace.png";
import istp from "./contents/img/yanggang.png";
import entp from "./contents/img/dejawa.png";
import enfp from "./contents/img/shrimp.png";
import isfj from "./contents/img/bbangttoa.png";
import intj from "./contents/img/tosipop.png";
import entj from "./contents/img/fire.png";
import esfp from "./contents/img/tropicana.png";
import estp from "./contents/img/together.png";

export const iconImg = (imgname) => {
  switch (imgname) {
    case "vodka":
      return infj;
    case "tonicwater":
      return enfj;
    case "milkjelly":
      return infp;
    case "ojing":
      return intp;
    case "redbull":
      return isfp;
    case "mintcandy":
      return istj;
    case "honey":
      return estj;
    case "ace":
      return esfj;
    case "yanggang":
      return istp;
    case "dejawa":
      return entp;
    case "shrimp":
      return enfp;
    case "bbangttoa":
      return isfj;
    case "tosipop":
      return intj;
    case "fire":
      return entj;
    case "tropicana":
      return esfp;
    case "together":
      return estp;
  }
};
