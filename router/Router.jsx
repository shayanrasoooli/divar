import React from 'react'

import HomePage from '../src/pages/HomePage';
import DashboardPage from '../src/pages/DashboardPage';
import AuthPage from '../src/pages/AuthPage';
import AdminPage from '../src/pages/AdminPage';
import PageNotFound from '../src/pages/404';
import { Route , Routes , BrowserRouter, Navigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services/user';
import Loader from '../src/components/module/Loader';

function Router() {
    const {data , isLoading , error} = useQuery(["profile"] , getProfile);
    console.log({data , isLoading , error});

    if (isLoading) {
      return <Loader/>
    }
  return (
    <Routes>
    <Route index element={<HomePage />} />
    <Route path="/dashboard" element={data ? <DashboardPage /> : <Navigate to='/auth' />} />
    <Route path="/auth" element={data ?  <Navigate to='/dashboard' />  : <AuthPage /> } />
    <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage /> : <Navigate to='/' />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router