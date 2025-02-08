"use client"
import React from 'react'
import { Store } from './Redux/store';
import { Provider } from 'react-redux';

const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Provider store={Store}>
        {children}
        </Provider>
        </div>
  )
}

export default Providers