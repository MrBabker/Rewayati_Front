"use client";
import React, { useEffect } from "react";

const Try = () => {
  useEffect(() => {
    const funfun = () => {
      compressString("aaabbbuyggg");
      reorderSentence("i1 the3 am2 is6 one4 who5 cool7");
    };
    funfun();
  }, []);

  const fff = () => {
    const a = [1];
    a.push(2);
    console.log(a.join());
  };

  const compressString = (chars: string) => {
    const tak: string[] = [];
    for (let i = 0; i < chars.length; i++) {
      if (i < chars.length) {
        if (i === 0 || chars[i] === chars[i - 1]) {
          if (tak.includes(chars[i]) === false) {
            tak.push(chars[i]);
            tak.push("1");
          } else {
            const target = tak.find((t) => t === chars[i]);
            const index = tak.indexOf(target);
            tak[index + 1] = (parseInt(tak[index + 1]) + 1).toString();
          }
        } else {
          tak.push(chars[i]);
          tak.push("1");
        }
      }
    }

    console.log(tak.join(""));
  };

  const reorderSentence = (talk: string) => {
    const talks = talk.split(" ");
    const talksnumbers = [];

    const lastTalks = [];

    for (let i = 0; i < talks.length; i++) {
      talksnumbers.push(talks[i][talks[i].length - 1]);
    }
    talksnumbers.sort();

    for (let i = 0; i < talksnumbers.length; i++) {
      for (let i2 = 0; i2 < talks.length; i2++) {
        if(talksnumbers[i] === talks[i2][talks[i2].length-1]){
           
            lastTalks.push( talks[i2].split(talksnumbers[i],1));
        }
      }
    }
    console.log(lastTalks.join(' '));
  };

  return null;
};

export default Try;
