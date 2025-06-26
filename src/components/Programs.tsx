import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      title: "Базовая программа",
      subtitle: "Для мастеров с ограниченным доходом",
      price: "29 990",
      features: [
        "Основы наращивания ресниц",
        "Базовые техники и материалы",
        "1 сертификат",
        "Доступ к чату поддержки",
        "Базовый набор материалов",
      ],
      badge: "Популярный",
      color: "bg-gray-50",
    },
    {
      title: "Профессиональная",
      subtitle: "Для готовых инвестировать время и деньги",
      price: "59 990",
      features: [
        "Все техники наращивания",
        "LED технологии",
        "2 сертификата",
        "Персональный куратор",
        "Профессиональный набор",
        "Бизнес-модуль",
      ],
      badge: "Рекомендуем",
      color: "bg-lash-red/5 border-lash-red",
    },
    {
      title: "Максимальная карьера",
      subtitle: "Карьера на максималках",
      price: "99 990",
      features: [
        "Все техники + авторские",
        "LED + инновационные технологии",
        "3 сертификата",
        "Индивидуальное сопровождение",
        "Премиум набор материалов",
        "Маркетинг и продвижение",
        "Помощь в трудоустройстве",
      ],
      badge: "Премиум",
      color: "bg-black text-white",
    },
    {
      title: "Индивидуальная студия",
      subtitle: "Создание студии + обучение мастеров",
      price: "199 990",
      features: [
        "Все программы обучения",
        "Бизнес-план студии",
        "Обучение ваших мастеров",
        "Франшизная поддержка",
        "Маркетинговые материалы",
        "Юридическое сопровождение",
      ],
      badge: "Бизнес",
      color: "bg-gradient-to-br from-lash-black to-gray-800 text-white",
    },
    {
      title: "Программа тренера",
      subtitle: "Для обучения очно и онлайн",
      price: "149 990",
      features: [
        "Методика преподавания",
        "Сертификат тренера",
        "Готовые учебные материалы",
        "Техники презентации",
        "Право проводить курсы",
        "Маркетинг для тренеров",
      ],
      badge: "Тренер",
      color: "bg-red-gradient text-white",
    },
  ];

  return (
    <section className="py-20 bg-lash-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-lash-black mb-4">
            Программы обучения
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите программу, которая подходит именно вам и вашим целям в
            lash-индустрии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${program.color}`}
            >
              {program.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-lash-red text-white px-6 py-2 rounded-full font-montserrat font-semibold text-sm">
                    {program.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`font-montserrat font-bold text-2xl mb-2 ${program.color.includes("text-white") ? "text-white" : "text-lash-black"}`}
                >
                  {program.title}
                </h3>
                <p
                  className={`font-opensans text-sm mb-4 ${program.color.includes("text-white") ? "text-gray-200" : "text-gray-600"}`}
                >
                  {program.subtitle}
                </p>
                <div
                  className={`font-montserrat font-bold text-4xl ${program.color.includes("text-white") ? "text-white" : "text-lash-black"}`}
                >
                  {program.price} ₽
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Icon
                      name="Check"
                      className={`mr-3 mt-0.5 flex-shrink-0 ${program.color.includes("text-white") ? "text-green-400" : "text-lash-red"}`}
                      size={16}
                    />
                    <span
                      className={`font-opensans text-sm ${program.color.includes("text-white") ? "text-gray-200" : "text-gray-700"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-4 font-montserrat font-semibold ${
                  program.color.includes("text-white")
                    ? "bg-white text-lash-black hover:bg-gray-100"
                    : "bg-lash-black text-white hover:bg-gray-800"
                }`}
              >
                Выбрать программу
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
