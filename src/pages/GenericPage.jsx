import React from 'react';

const GenericPage = ({ title }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{title}</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p>Content for {title} page</p>
      </div>
    </div>
  );
};

export default GenericPage;