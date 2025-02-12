import "./Title.css"
import {FC, ReactNode} from "react";

interface TitleProps {
  children: ReactNode;
}


export const Title: FC<TitleProps> = ({children}) => {
  return (
      <h2 className="block-title">
        {children}
    </h2>
  );
};
