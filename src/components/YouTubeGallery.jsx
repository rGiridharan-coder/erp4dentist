import React from 'react';

const videos = [
  { id: 'jPP0myTRA2A', title: 'ERP4 Introduction Video' },
  { id: 'Aa4vnWVtD8M', title: 'Appointment Scheduling' },
  { id: 'dn9ihP7xZ2c', title: 'Adding Patient Information' },
  { id: '97f1tt8hq24', title: 'Record Initial Patient Examination' },
  { id: 'VVZELW3JbXI', title: 'Adding New Patient Observation' },
  { id: 'o-5AKLIgLkM', title: 'Create New Treatment Plan' },
  { id: 'S7nZvduLFQc', title: 'Add Clinical Notes' },
  { id: 'ubPxjHUnWys', title: 'Add Digital Prescriptions' },
  { id: '4zqeyNVxXEA', title: 'Add Labs' },
  { id: 'yjn9Jv1YdaI', title: 'Add Lab Works' },
  { id: 'cRJsU228v8c', title: 'Upload Medical Records' },
  { id: 'a3_vSzNnhCU', title: 'Create Drug Catalog' },
  { id: 'N31mv8kaR4c', title: 'Add New Dental Procedure' },
  { id: 'iND-G5QtmLY', title: 'Add New Branch' },
  { id: '_COVk0mgJTk', title: 'Add Doctor' },
  { id: '8QL6tzGt5bA', title: 'Generate Bills and Receipts' },
  { id: 'IfTKKOkcBsQ', title: 'Invoice Generation' },
  { id: 'e0IEnWTbWw0', title: 'Create MIS Reports' },
];

const YouTubeGallery = ({ search }) => {
  const filteredVideos = search
    ? videos.filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      )
    : videos;

  return (
    <div className="tu-video" style={{ padding: '10px 0' }}>
      <div
        style={{
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        }}
      >
        {filteredVideos.map((video, index) => (
          <div key={index}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeGallery;
