import style from './Cards.module.css';
import { CardProps } from './Card/Card';
import Card from './Card';

export type CardsProps = {
  items: CardProps[];
};

const Cards = ({ items }: CardsProps) => {
  return (
    <div className={style.gridContainer}>
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Cards;
