"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ExperienceCard from "../ExperienceCard";
import { experiences } from "@/app/content/experiences";
import { PrevButton, NextButton } from "./CarouselArrowButtons";
import { useDotButton } from "./CarouselDotButton";

type PropType = {
  options?: EmblaOptionsType;
};

const ExperienceCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    align: "start",
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {experiences.map((exp, index) => (
            <div className="embla__slide" key={index}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
      {(!prevBtnDisabled || !nextBtnDisabled) && (
        <div className="embla__controls flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`embla__dot${index === selectedIndex ? " embla__dot--selected" : ""}`}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCarousel;
