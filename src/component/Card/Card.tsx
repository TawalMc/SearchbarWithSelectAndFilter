import { DummyDataType } from '../../dummy';
import style from './Card.module.css';

export type CardProps = DummyDataType;

const Card = (props: CardProps) => {
  const availability = () => {
    if (props?.available == null || props?.available == undefined) {
      return "Uncategorised"
    }
    return props.available ? "Yes" : "No"
  }

  return (
    <div className={style.card}>
      <div className={style.container}>
        <h4>
          <b>
            {props.firstName} {props?.lastName}
          </b>
        </h4>
        <p>{props.teams.title}</p>
        <p>availability: {availability()}</p>
      </div>
    </div>
  );
};

export default Card;
