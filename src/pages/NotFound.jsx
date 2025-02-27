import React from 'react'
import Layout from '../components/Layout';
import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-red-950">NOT FOUND</h1>
      <hr />
      <p className="mt-8 mb-20 text-red-950">
      <NavLink to="/" className=" hover:text-green-400">หน้าหลัก</NavLink>
      </p>
    </Layout>
  );
};

export default NotFound;