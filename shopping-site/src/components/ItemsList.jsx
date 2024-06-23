import React from 'react';
import { useRecoilValue } from 'recoil';
import { itemsState } from '../state';
import Card from './Card';

const ItemsList = () => {
  const items = useRecoilValue(itemsState);

  return (
    <div className="items-list">
      <div class="bg-gray-800 text-gray-100 text-xl font-semibold p-4 rounded-lg shadow-md mt-2 mx-4 text-center">
        Often Bought Together !!
      </div>
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
