import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <div className="bg-orange-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg-px-8 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">
          Kuşunuzun Sağlığı İçin Hemen İletişime Geçin
        </h2>
        <p className="text-xl text-orange-100">
          Deneyimli veteriner hekimimizden randevu alın
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+902124561234"
            className="flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors justify-center gap-4"
          >
            <Phone className="w-5 h-5" />
            <span>+90 (212) 456 12 34</span>
          </a>
          <a
            href="/contact"
            className=" bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
          >
            <span>İletişim bilgileri</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
