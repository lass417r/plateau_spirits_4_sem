import React from "react";

const GoogleMap = ({ location }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCiS2U7WJocGhlNyb0kFEjypOYAvnR_gnY&q=${location}`;

  return (
    <div className="h-full w-full">
      <iframe className="h-full w-full" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src={src} />
    </div>
  );
};

export default GoogleMap;
