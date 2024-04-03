import ProfileStructure from '@/Components/Structure/ProfileStructure';
import React from 'react';

const IndexPage = () => {
  const familyData = {
    name: 'Parent',
    children: [
      {
        name: 'Child 1',
        children: [
          {
            name: 'Grandchild 1.1', children: [

            ]
          },
          { name: 'Grandchild 1.2' }
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
          {renderFamily(familyData, true)}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
