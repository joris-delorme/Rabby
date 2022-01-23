import React from 'react';

const ShortAddress = ({address}) => {
    return <span>{`${address.substring(0, 7)}...${address.substring((address.length - 1), (address.length - 8))}`}</span>;
};

export default ShortAddress;
