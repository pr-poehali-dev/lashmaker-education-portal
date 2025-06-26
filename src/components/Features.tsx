import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Zap",
      title: "LED Технологии",
      description:
        "Современные методы с использованием LED для быстрого и качественного результата",
    },
    {
      icon: "Clock",
      title: "Скоростное наращивание",
      description:
        "Техники, позволяющие сократить время процедуры без потери качества",
    },
    {
      icon: "Calendar",
      title: "Носка от 5 недель",
      description:
        "Гарантированная длительная носка благодаря профессиональным техникам",
    },
    {
      icon: "MessageCircle",
      title: "Чат с обратной связью",
      description:
        "Постоянная поддержка преподавателей и ответы на все вопросы",
    },
    {
      icon: "BookOpen",
      title: "Запрос новых уроков",
      description:
        "Можете запросить урок по любой теме, которой нет в программе",
    },
    {
      icon: "RefreshCw",
      title: "Безлимитные обновления",
      description: "Доступ ко всем новым материалам и техникам навсегда",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-lash-black mb-4">
            Уникальные возможности
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем революционный подход к обучению лэшмейкеров с
            использованием современных технологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-lash-red/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-lash-red/10 group-hover:bg-lash-red/20 rounded-xl w-16 h-16 flex items-center justify-center mb-6 transition-colors">
                <Icon
                  name={feature.icon as any}
                  className="text-lash-red"
                  size={28}
                />
              </div>

              <h3 className="font-montserrat font-semibold text-xl text-lash-black mb-3">
                {feature.title}
              </h3>

              <p className="font-opensans text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
