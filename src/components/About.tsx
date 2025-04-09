const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center priority relative text-white text-center"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#76162a]/40"></div>
        <div className="relative z-10 max-w-3xl p-8">
          <h1 className="text-5xl font-serif text-white mb-4 md:text-7xl">About Cedilla</h1>
          <p className="text-2xl text-[#ffdbdb]">Our story, our team, our passion</p>
        </div>
      </section>

      {/* Restaurant Concept */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-[#76162a] mb-6 relative inline-block">
              Our Concept
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/venue1.jpg"
                alt="Cedilla Restaurant Concept"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-[#76162a]/80 md:text-2xl">
              <p className="mb-4">
                Cedilla is a restaurant offering authentic, classic French dishes fused with organic
                and local Hong Kong produce. We are committed to delivering an exceptional dining
                experience that celebrates the best of French culinary tradition while embracing the
                vibrancy of Hong Kong&apos;s local ingredients.
              </p>
              <p className="mb-4">
                Our philosophy is simple: respect for ingredients, meticulous preparation, and a
                passion for creating memorable flavors. Each dish tells a story, blending timeless
                French techniques with innovative touches.
              </p>
              <p>
                The name &ldquo;Cedilla&rdquo; represents our commitment to fine details - just as
                this accent mark changes the pronunciation and meaning of a letter, our careful
                attention to the subtleties of flavor, presentation, and service transforms the
                dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-[#ffdbdb]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-[#76162a] mb-6 relative inline-block">
              Meet Our Chef
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="lg:w-1/3">
              <img
                src="/images/chef.jpg"
                alt="Chef Nihonyanagi Makoto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-2/3 p-8">
              <h3 className="text-3xl font-serif text-[#76162a] mb-2">Nihonyanagi Makoto</h3>
              <p className="text-[#ee8080] mb-6">Head Chef</p>
              <div className="text-[#76162a]/80 md:text-2xl space-y-4">
                <p>
                  Nihonyanagi had 25 years of French culinary experience in Japan where he learned
                  many techniques and important ideas of French cuisine from the &ldquo;Grand Chef
                  MIKUNI KIYOMI&rdquo;, his culinary philosophy inspired him a lot.
                </p>
                <p>
                  Starting his career in Tokyo, Nihonyanagi trained under some of Japan&apos;s most
                  respected French culinary masters before furthering his education with stages in
                  prestigious kitchens throughout France.
                </p>
                <p>
                  Nihonyanagi cooks with respect and passion for the people, culture and producers
                  of this region. It&apos;s called &ldquo;Terroir&rdquo; in French and it is very
                  natural for him. His cuisine consists of fusion between Japan, France and Hong
                  Kong.
                </p>
                <p>
                  At Cedilla, Chef Nihonyanagi brings his unique perspective to classic French
                  dishes, incorporating subtle Japanese influences and the freshest local Hong Kong
                  ingredients to create a truly distinctive dining experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sommelier Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-[#76162a] mb-6 relative inline-block">
              Our Sommelier
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row-reverse bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="lg:w-1/3">
              <img
                src="/images/vitor.jpg"
                alt="Victor the Sommelier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-2/3 p-8">
              <h3 className="text-3xl font-serif text-[#76162a] mb-2">Victor</h3>
              <p className="text-[#ee8080] mb-6">Head Sommelier</p>
              <div className="text-[#76162a]/80 md:text-2xl space-y-4">
                <p>
                  Passionate about wine and spirits, Victor discovered the world of catering and
                  sommellerie in 5-star establishments in the Alps and the South of France before
                  establishing himself abroad in Greece and California.
                </p>
                <p>
                  Victor&apos;s journey in the world of wine began in his native France, where he
                  developed a profound appreciation for the country&apos;s diverse wine regions and
                  traditions. His expertise extends beyond French wines to encompass exceptional
                  bottles from around the world.
                </p>
                <p>
                  With certifications from prestigious wine institutions and experience in
                  5-star Hotel, Victor brings unparalleled expertise to
                  Cedilla&apos;s wine program.
                </p>
                <p>
                  Today, he&apos;s keen to share his experience and provide the very best in French
                  service and wine pairing recommendations that perfectly complement our menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Gallery */}
      <section className="py-20 bg-[#ffdbdb]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif text-[#76162a] mb-6 relative inline-block">
              Our Restaurant
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ee8080]"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
              <img
                src="/images/venue1.jpg"
                alt="Cedilla Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
              <img
                src="/images/venue2.jpg"
                alt="Cedilla Restaurant Dining Area"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
              <img
                src="/images/venue3.jpg"
                alt="Cedilla Restaurant Private Dining"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
              <img
                src="/images/venue4.jpg"
                alt="Cedilla Restaurant Bar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
              <img
                src="/images/venue1.jpg"
                alt="Cedilla Restaurant Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
              <img
                src="/images/venue2.jpg"
                alt="Cedilla Restaurant Terrace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 