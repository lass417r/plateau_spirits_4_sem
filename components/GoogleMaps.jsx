import React from "react";

const GoogleMap = ({ location }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${location}`;

  return (
    <div className="aspect-video">
      <iframe className="h-full w-full" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src={src} />
    </div>
  );
};

export default GoogleMap;
