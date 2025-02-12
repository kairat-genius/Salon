import "./TitleDescription.css";
import {FC, ReactNode} from "react"
import {Title} from "@/shared/ui/Title";

interface TitleDescriptionProps {
    title: string;
    children: ReactNode;
}

export const TitleDescription: FC<TitleDescriptionProps> = ({ title, children }) => {
    return (
        <div className="title-description">
            <Title>{title}</Title>
            <div className="description">{children}</div>
        </div>
    );
};