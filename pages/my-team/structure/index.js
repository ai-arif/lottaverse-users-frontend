import ProfileStructure from '@/Components/Structure/ProfileStructure';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import {fetchReferralHierarchy} from '../../../features/user/userSlice';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

const IndexPage = () => {
  const dispatch = useDispatch()
  const {structure} = useSelector(state=>state.user)
  
  useEffect(() => {
    
    if (Object.keys(structure).length == 0) {
      dispatch(fetchReferralHierarchy());
    }
  }, [dispatch, structure]);

  const familyData = {
    name: 'Parent',
    children: [
      {
        name: 'Child 1',
        children: [
          {
            name: 'Grandchild 1.1',
          },
          { name: 'Grandchild 1.2' },
          { name: 'Grandchild 1.3', children: [{ name: 'Great Grandchild 1.3.1' }, { name: 'Great Grandchild 1.3.2' }] },
        ]
      },
      {
        name: 'Child 2',
        children: [
          { name: 'Grandchild 2.1' },
          { name: 'Grandchild 2.2' }
        ]
      }
    ]
  };

  const renderFamily = (family, isFirstChild = false) => {
    return (
      <>
      <br />
        {family?.children && (
          <>
            <div className="d-flex flex-column align-items-center">
              <ProfileStructure name={family.name} />
              <div className="arrow-down"></div>
              <div className="connect-line-horizontal"></div>
            </div>
            <div className="d-flex justify-content-center">
              {family?.children.map((child, index) => (
                <div key={index} className="d-flex flex-column align-items-center">
                  {renderFamily(child, index === 0)}
                </div>
              ))}
            </div>
          </>
        )}
        {!family?.children && (
          <div className="d-flex flex-column align-items-center">
            <ProfileStructure name={family?.name} />
          </div>
        )}
      </>
    );
  };

  return (
    <div className="container">
      <Head>
        <title>My Team - Structure</title>
      </Head>
      <div className="row">
        <div className="col">
          {renderFamily(structure, true)}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
