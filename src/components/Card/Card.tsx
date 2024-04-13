import style from "./Card.module.css";

interface Props {
	title?: string;
	professional?: string;
	description?: string;
	pathButton?: string;
}

export const Card = ({ title, description, professional}: Props) => {
  return (
    <div>
        <div>

        </div>
        <div>
            <div>

            </div>
            <h3>{title}</h3>
            <h3>{professional}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
