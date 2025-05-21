// components/Pricing.tsx
import React from 'react';
import SectionTitle from './SectionTitle';
import PricingCard from './PricingCard';

interface PricingPlan {
  title: string;
  price: string;
  features: Array<{
    active: boolean;
    text: string;
  }>;
  bgColor: string;
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      title: 'Tarif Gratuit',
      price: 'Gratuit',
      bgColor:"bg-blue-50",
      features: [
        { active: true, text: '🛍️ Publiez jusqu’à 15 articles' },
        { active: true, text: '🫶🏻 Assistance rapide en cas de besoin' },
      ]
    },
    {
      title: 'Tarif Standard',
      price: '9,99 €/mois',
      bgColor:"bg-blue-100",
      features: [
        { active: true, text: '🛍️ Publiez les articles sans limite' },
        { active: true, text: '🫶🏻 Assistance rapide en cas de besoin' },
        { active: true, text: "🔥 Mettez en avant jusqu'à 5 de vos articles pour plus de visibilité" }
      ]
    },
    {
      title: 'Tarif Premium',
      price: '19,99 €/mois',
      bgColor:"bg-blue-200",
      features: [
        { active: true, text: '🛍️ Publiez les articles sans limite' },
        { active: true, text: '🫶🏻 Assistance rapide en cas de besoin' },
        { active: true, text: "🚀 Mettez en avant jusqu'à 2 de vos collections pour plus de visibilité" },
        { active: true, text: '📈 Suivez vos performances et ajustez votre stratégie' },
        { active: true, text: '✍🏻 Participez aux formations en ligne pour les commerçants' }
      ],
     
    }
  ];

  return (
    <section className="container mx-auto p-4 my-4">
      <SectionTitle>Tarifs pour les vendeurs</SectionTitle>
      <div className="text-center">
        <button className="bg-blue-800 text-white px-6 py-3 rounded-full font-poppins font-normal text-base">Je vends sur Loomeria</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {plans.map((plan, index) => (
          <PricingCard 
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            bgColor={plan.bgColor}
          />
        ))}
      </div>
    </section>
  );
}
