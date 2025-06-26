import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Results = () => {
  const results = [
    {
      id: 1,
      name: "Анна Петрова",
      city: "Москва",
      before:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1583001931096-959e155edcf6?w=300&h=300&fit=crop",
      testimonial:
        "За 3 месяца обучения я научилась делать потрясающие работы. Теперь у меня своя студия!",
      program: "Профессиональная программа",
    },
    {
      id: 2,
      name: "Мария Сидорова",
      city: "СПб",
      before:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop",
      testimonial:
        "LED технологии изменили мой подход к работе. Клиенты в восторге от результата!",
      program: "Максимальная карьера",
    },
    {
      id: 3,
      name: "Елена Козлова",
      city: "Казань",
      before:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop",
      after:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
      testimonial:
        "Благодаря курсу я увеличила доход в 4 раза за полгода. Рекомендую всем!",
      program: "Базовая программа",
    },
  ];

  const stats = [
    { number: "5000+", label: "Выпускников", icon: "Users" },
    { number: "98%", label: "Довольных учеников", icon: "Heart" },
    { number: "150%", label: "Рост дохода", icon: "TrendingUp" },
    { number: "5 недель", label: "Носкость работ", icon: "Clock" },
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
              Результаты <span className="text-lash-red">Учеников</span>
            </h1>
            <p className="font-opensans text-xl text-gray-300">
              Реальные истории успеха наших выпускников
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-lash-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={stat.icon as any}
                    className="text-lash-red"
                    size={24}
                  />
                </div>
                <div className="font-montserrat text-3xl font-bold text-lash-black mb-2">
                  {stat.number}
                </div>
                <div className="font-opensans text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Gallery */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-montserrat text-3xl font-bold text-center text-lash-black mb-12">
          До и После
        </h2>

        <div className="grid gap-12">
          {results.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                {/* Before/After Images */}
                <div className="md:w-1/2 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-montserrat font-semibold text-center mb-2 text-gray-600">
                        ДО
                      </h4>
                      <img
                        src={result.before}
                        alt="До"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-center mb-2 text-lash-red">
                        ПОСЛЕ
                      </h4>
                      <img
                        src={result.after}
                        alt="После"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-lash-red/10 text-lash-red px-3 py-1 rounded-full text-sm font-semibold">
                      {result.program}
                    </span>
                  </div>

                  <blockquote className="font-opensans text-lg text-gray-700 mb-6 italic">
                    "{result.testimonial}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="bg-lash-red/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Icon name="User" className="text-lash-red" size={20} />
                    </div>
                    <div>
                      <div className="font-montserrat font-semibold text-lash-black">
                        {result.name}
                      </div>
                      <div className="font-opensans text-gray-600">
                        {result.city}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="font-montserrat text-2xl font-bold text-lash-black mb-4">
            Хотите достичь таких же результатов?
          </h3>
          <p className="font-opensans text-gray-600 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашей школе и станьте профессиональным лэшмейкером
          </p>
          <Button
            size="lg"
            className="bg-lash-red hover:bg-red-600 text-white px-8 py-4"
          >
            Начать обучение
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
