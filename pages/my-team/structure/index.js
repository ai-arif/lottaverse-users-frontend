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
              { name: 'Great Grandchild 1.1.1' },
              { name: 'Great Grandchild 1.1.2' }
            ]
          },

          { name: 'Grandchild 1.2' }
        ]
      },
      {
        name:"Child 2",
        children: [
          { name: 'Grandchild 2.1' },
          { name: 'Grandchild 2.2' }
        ]
      }
    ]
  };

  const renderFamily = (family) => {
    return (
      <>
        <ProfileStructure name={family.name} />
        {family.children && (
          <div className="d-flex justify-content-center">
            {family.children.map((child, index) => (
              <div key={index} className="d-flex flex-column align-items-center">
                {renderFamily(child)}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {renderFamily(familyData)}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
