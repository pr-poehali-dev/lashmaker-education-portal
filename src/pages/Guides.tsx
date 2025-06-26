import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: "Гайд для начинающих лэшмейкеров",
      description:
        "Полное руководство по началу карьеры в индустрии наращивания ресниц",
      pages: 24,
      downloads: 2456,
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=200&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "LED технологии: пошаговое руководство",
      description:
        "Подробная инструкция по работе с LED технологиями в наращивании",
      pages: 18,
      downloads: 1834,
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Карта эффектов и техник",
      description:
        "Визуальное руководство по различным эффектам наращивания ресниц",
      pages: 12,
      downloads: 3201,
      image:
        "https://images.unsplash.com/photo-1583001931096-959e155edcf6?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-lash-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Назад на главную
            </Link>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
              Бесплатные <span className="text-lash-red">Гайды</span>
            </h1>
            <p className="font-opensans text-xl text-gray-300">
              Скачайте профессиональные материалы для развития навыков
              лэшмейкера
            </p>
          </div>
        </div>
      </div>

      {/* Featured Guide */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={guides[0].image}
                alt={guides[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="bg-lash-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ПОПУЛЯРНЫЙ
                </span>
              </div>

              <h2 className="font-montserrat text-3xl font-bold text-lash-black mb-4">
                {guides[0].title}
              </h2>

              <p className="font-opensans text-gray-600 mb-6 text-lg">
                {guides[0].description}
              </p>

              <div className="flex items-center text-gray-500 mb-6">
                <Icon name="FileText" className="mr-2" size={16} />
                <span className="mr-6">{guides[0].pages} страниц</span>
                <Icon name="Download" className="mr-2" size={16} />
                <span>{guides[0].downloads.toLocaleString()} скачиваний</span>
              </div>

              <Button
                size="lg"
                className="bg-lash-red hover:bg-red-600 text-white w-fit"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать бесплатно
              </Button>
            </div>
          </div>
        </div>

        {/* Other Guides */}
        <div className="grid md:grid-cols-2 gap-8">
          {guides.slice(1).map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold text-lash-black mb-3">
                  {guide.title}
                </h3>

                <p className="font-opensans text-gray-600 mb-4">
                  {guide.description}
                </p>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Icon name="FileText" className="mr-2" size={14} />
                  <span className="mr-4">{guide.pages} стр.</span>
                  <Icon name="Download" className="mr-2" size={14} />
                  <span>{guide.downloads.toLocaleString()}</span>
                </div>

                <Button
                  variant="outline"
                  className="border-lash-red text-lash-red hover:bg-lash-red hover:text-white w-full"
                >
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;
