import {
  Clock,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const contactItems = [
    {
      icon: Phone,
      text: "+90 (212) 456 12 34",
    },
    {
      icon: MapPin,
      text: "İstanbul, Türkiye",
    },
    {
      icon: Clock,
      text: "09:00 - 21:00",
    },
  ];
  const socialMediaItems = [
    {
      icon: Instagram,
      text: "@aladdin.alizada",
    },
    {
      icon: Facebook,
      text: "Aladdin Alizada",
    },
    {
      icon: Linkedin,
      text: "Aladdin Alizada",
    },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-start md:place-items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-full">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Aladdin Alizada</h3>
                <p className="text-orange-400">Veteriner Kliniği</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Kuş Sağlığında uzamanlaşmış veteriner kliniği. Sevimli
              dostlarınızın sağlığı bizim önceliğimiz.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              {contactItems.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">{contact.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sosyal Medya</h3>
            {socialMediaItems.map((socialmediaitem, index) => {
              const Icon = socialmediaitem.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">{socialmediaitem.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hairline */}
      <div className="border-t border-gray-800 p-8 text-center">
        <a
          href="https://aladdin-alizada.vercel.app/"
          className="text-gray-400 text-sm"
          target="_blank"
        >
          &copy; {new Date().getFullYear()} Aladdin Alizada. Tüm hakları
          saklıdır.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
