import React, { useContext } from 'react';

export const TransactionList = () => {

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li class="minus">
        Cash <span>-$400</span><button class="delete-btn">x</button>
        </li>
        </ul>
    </>
  )
}