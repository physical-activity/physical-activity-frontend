import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignInPage } from './signin'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  )
}
