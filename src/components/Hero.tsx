const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kuşlarınızın Sağlığı
              <span className="block text-orange-600">Bizim önceliğimiz</span>
            </h1>
            <p className="text-gray-600 mb-8 text-xl leading-relaxed">
              Ankara'da kuş sağlığında uzmanlaşmış veteriner kliniği. Sevimli
              dostlarınızın sağlık ihtiyaçları içn profesyonel ve güvenilir
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
              >
                Randevu al
              </a>
              <a
                href="tel:+902124561234"
                className="bg-white text-orange-600 border-2 border-bg-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
              >
                Hemen Ara
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg"
              alt=""
              className="rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
              <span className="font-bold text-gray-900">Uzman Bakım</span>
              <span className=" block text-xl font-bold text-orange-600">
                7+ yıl deneyim
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
