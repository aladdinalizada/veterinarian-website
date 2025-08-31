import { Clock, Heart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Kuş Sağlığı Uzmanı",
      description: "Kuş sağlığı ve bakImında uzmanlaşmış veteriner hekimlik",
    },
    {
      icon: Shield,
      title: "Güvenilir Hizmet",
      description:
        "Modern ekipman ve güncel tedavi yöntemleri ile güvenli hizmet",
    },
    {
      icon: Clock,
      title: "Acil Durumlar",
      description: "7/24 acil durumlarda ulaşabilir ve hızlı müdahale",
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Neden Bizi Tercih Ediyorsunuz?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kuş sağlığı konusunda uzmanlaşmış ekibimiz ve modern kliniğimiz ile
            sevimli dostlarınıza en iyi bakımı sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="space-y-4 text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-200"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex justify-center items-center mx-auto ">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
