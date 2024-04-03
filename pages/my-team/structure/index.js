import ProfileStructure from '@/Components/Structure/ProfileStructure';
import React from 'react';

const IndexPage = () => {
  const familyData = {
    name: 'Parent',
    children: [
      {
        name: 'Child 1',
        children: [
          { name: 'Grandchild 1' },
          { name: 'Grandchild 2' }
        ]
      },
      {
        name: 'Child 2',
        children: [
          { name: 'Grandchild 3' }
        ]
      },
      { name: 'Child 3' }
    ]
  };

  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {
            familyData.children.map((child, index) => (
              <ProfileStructure key={index} name={child.name}>
                {
                  child.children && child.children.map((grandchild, index) => (
                    <ProfileStructure key={index} name={grandchild.name} />
                  ))
                }
              </ProfileStructure>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
