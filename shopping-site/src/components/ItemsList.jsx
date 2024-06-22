import React from 'react';
import { useRecoilValue } from 'recoil';
import { itemsState } from '../state';
import Card from './Card';

const ItemsList = () => {
  const items = useRecoilValue(itemsState);

  return (
    <div className="items-list">
      {items.map((itemData) => (
        <Card
          key={itemData.id}
          id={itemData.id}
          items={itemData.items}
        />
      ))}
    </div>
  );
};

export default ItemsList;