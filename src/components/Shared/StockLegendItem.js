import React from 'react';

const StockLegendItem = ({ color, name, quantity }) => {
  return (
    <div className=" text-xs flex items-center mb-2">
      <div className={`w-4 h-4 mr-2 rounded-full ${color}`}></div>
      <span className="mr-1">{name}</span>
      <span>{quantity}</span>
    </div>
  );
};

export default StockLegendItem;