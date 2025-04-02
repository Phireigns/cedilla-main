const ParallexSection = () => {

  return (
    <div
      className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{
        backgroundImage: 'url("/images/venue2.jpg")',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content that appears over the parallax image */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            A Culinary Journey Awaits
          </h2>
          <p className="text-lg md:text-2xl text-white/90">
            Experience the perfect blend of tradition and innovation
          </p>
        </div>
      </div>
    </div>
  )
}

export default ParallexSection;
