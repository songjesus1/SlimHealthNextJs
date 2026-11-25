import React from "react";
import "./Input.css";
import "../../app/globals.css";
import { Text } from "../Text";

export interface InputProps {
  title: string;
  fixWidth?: number;
  type?: string;
  maxLength?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input = ({
  title,
  fixWidth,
  type,
  maxLength,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <div className="input">
      <div style={fixWidth ? { width: fixWidth, textAlign: "right" } : {}}>
        <Text>{title}</Text>
      </div>
      <input
        className="inputBox"
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
