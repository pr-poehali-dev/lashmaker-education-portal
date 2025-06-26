import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "LED технологии в наращивании ресниц: революция в индустрии",
      excerpt:
        "Как новые технологии меняют подход к наращиванию ресниц и увеличивают носкость до 5 недель",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=250&fit=crop",
      date: "15 декабря 2024",
      readTime: "7 мин",
    },
    {
      id: 2,
      title: "Топ-5 ошибок начинающих лэшмейкеров",
      excerpt:
        "Разбираем самые частые ошибки новичков и способы их избежать для успешного старта карьеры",
      image:
        "https://images.unsplash.com/photo-1583001931096-959e155edcf6?w=400&h=250&fit=crop",
      date: "12 декабря 2024",
      readTime: "5 мин",
    },
    {
      id: 3,
      title: "Как выбрать правильные материалы для наращивания",
      excerpt:
        "Подробный гид по выбору клея, ресниц и инструментов для качественной работы лэшмейкера",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=250&fit=crop",
      date: "10 декабря 2024",
      readTime: "8 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Статьи о <span className="text-lash-red">Лэшмейкинге</span>
            </h1>
            <p className="font-opensans text-xl text-gray-300">
              Полезные материалы, техники и тренды индустрии наращивания ресниц
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:gap-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Icon name="Calendar" className="mr-2" size={16} />
                    <span className="mr-4">{article.date}</span>
                    <Icon name="Clock" className="mr-2" size={16} />
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="font-montserrat text-2xl font-bold text-lash-black mb-4 hover:text-lash-red transition-colors cursor-pointer">
                    {article.title}
                  </h2>

                  <p className="font-opensans text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button
                    variant="outline"
                    className="border-lash-red text-lash-red hover:bg-lash-red hover:text-white"
                  >
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-lash-red hover:bg-red-600 text-white px-8 py-4"
          >
            Загрузить больше статей
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
