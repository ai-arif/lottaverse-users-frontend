import ProfileStructure from '@/Components/Structure/ProfileStructure';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';

const IndexPage = () => {
  const [structure, setStructure]=useState()
  const [loading, setLoading]=useState(false)
  // load the structure, api/referral-hierarchy

  const loadStructure=async()=>{
    try {
      setLoading(true)
      let res=await axiosInstance.get('/api/referral-hierarchy')
      setStructure(res.data.data)
      console.log(res.data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(()=>{
    loadStructure()
  },[])

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
        {family.children && (
          <>
            <div className="d-flex flex-column align-items-center">
              <ProfileStructure name={family.name} />
              <div className="arrow-down"></div>
              <div className="connect-line-horizontal"></div>
            </div>
            <div className="d-flex justify-content-center">
              {family.children.map((child, index) => (
                <div key={index} className="d-flex flex-column align-items-center">
                  {renderFamily(child, index === 0)}
                </div>
              ))}
            </div>
          </>
        )}
        {!family.children && (
          <div className="d-flex flex-column align-items-center">
            <ProfileStructure name={family.name} />
          </div>
        )}
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {renderFamily(structure, true)}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
