import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-lash-gradient flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Школа
            <br />
            <span className="text-lash-red">Лэшмейкеров</span>
          </h1>

          <p className="font-opensans text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Бессрочное онлайн обучение скоростному наращиванию ресниц с LED
            технологиями. Носка от 5 недель, 3 сертификата, тренажер в кармане.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-lash-red hover:bg-red-600 text-white px-8 py-4 text-lg font-montserrat font-semibold"
            >
              Начать обучение
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-montserrat font-semibold"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-lash-red/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Infinity" className="text-lash-red" size={32} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Бессрочное обучение
              </h3>
              <p className="font-opensans opacity-80">
                Безлимитное обновление материалов
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lash-red/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" className="text-lash-red" size={32} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Тренажер в кармане
              </h3>
              <p className="font-opensans opacity-80">
                Мобильное обучение 24/7
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lash-red/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-lash-red" size={32} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                3 сертификата
              </h3>
              <p className="font-opensans opacity-80">
                По направлениям обучения
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
