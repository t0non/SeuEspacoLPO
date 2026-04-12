import React from 'react';

const VideoShowcase: React.FC = () => {
  const videos = [
    {
      url: "https://player.vimeo.com/external/494254848.sd.mp4?s=346513361e27a6e1333dc5e3e23659dc1d5dd605&profile_id=164&oauth2_token_id=57447761",
      title: "Limpeza de Detalhe",
      description: "Remoção técnica de poeira em superfícies delicadas."
    },
    {
      url: "https://player.vimeo.com/external/434045526.sd.mp4?s=c162cf065b26391d31063ca16fdf4005b637996a&profile_id=164&oauth2_token_id=57447761",
      title: "Brilho em Pisos",
      description: "Polimento e higienização profunda de porcelanatos."
    },
    {
      url: "https://player.vimeo.com/external/459388145.sd.mp4?s=6941584c0c16b23d537d976313ef0de229a1bd4a&profile_id=164&oauth2_token_id=57447761",
      title: "Entrega Final",
      description: "O imóvel pronto para receber sua mudança."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {videos.map((video, index) => (
        <div key={index} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2">
          <div className="aspect-[9/16] md:aspect-square overflow-hidden">
            <video
              src={video.url}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-xl font-bold mb-2">{video.title}</h3>
            <p className="text-sm text-white/70">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoShowcase;
