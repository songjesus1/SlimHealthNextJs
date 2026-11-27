"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import "../../app/globals.css";
import { Text } from "../Text";
import { FlexLayout } from "../FlexLayout";
import { FlexDirection } from "../FlexLayout/FlexDirection";

export const sliderWidth = 299;

export interface SliderProps {
  /** 값 */
  value: number;
  /** 값 변경 이벤트 */
  onChange: (value: number) => void;
  /** 최댓값 */
  maxValue: number;
  /** 최솟값 */
  minValue: number;
}

export const Slider = ({
  value,
  onChange,
  maxValue,
  minValue,
}: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const latestValueRef = useRef<number>(value);
  const [dragging, setDragging] = useState(false);

  const emitChange = (newValue: number) => {
    latestValueRef.current = newValue;

    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      onChange(latestValueRef.current);
    });
  };

  const updateValueFromPointer = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    let newValue = clientX - rect.left;

    newValue = Math.max(0, Math.min(newValue, rect.width - 10));
    emitChange(newValue);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateValueFromPointer(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateValueFromPointer(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  useEffect(() => {
    latestValueRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const centerValue = Math.trunc((maxValue + minValue) / 2);
  const valueArray = [maxValue, centerValue, minValue];

  return (
    <FlexLayout direction={FlexDirection.column} style={{ width: sliderWidth }}>
      <div
        className="slider"
        style={{ width: sliderWidth }}
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="sliderLine"></div>

        <div className="sliderCircle" style={{ left: value }}></div>
      </div>
      <div className="sliderValueContainer">
        {valueArray.map((item, index) => {
          return <Text key={index}>{item}</Text>;
        })}
      </div>
    </FlexLayout>
  );
};
