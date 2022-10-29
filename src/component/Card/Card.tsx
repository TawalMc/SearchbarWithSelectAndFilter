import { DummyDataType } from '../../dummy';
import style from './Card.module.css';

export type CardProps = {
  firstName: string;
  lastName?: string | null;
  title: string;
};

const Card = ({ firstName, lastName, title }: CardProps) => {
  return (
    <div className={style.card}>
      <div className={style.container}>
        <h4>
          <b>
            {firstName} {lastName}
          </b>
        </h4>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
