import { useState } from 'react';

const faqs = [
  { question: 'Who uses ByteBazaar CRM?', answer: 'Smart retailers, service providers, and growth-focused businesses.' },
  { question: 'Is the setup process complicated?', answer: 'No, setup takes less than 15 minutes with our onboarding wizard.' },
  { question: 'Do I need an IT team?', answer: 'No IT expertise required—ByteBazaar is built for simplicity.' },
  { question: 'Is my business data secure?', answer: 'We use encryption and best practices to protect your data.' },
  { question: 'What kind of support is available?', answer: 'Email and chat support on all plans. Enterprise gets a dedicated manager.' },
  { question: 'Can I manage my entire team here?', answer: 'Yes, invite as many team members as you need.' }
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bb-faq" id="faq">
      <h2>CRM FAQ&apos;s</h2>
      <div className="bb-faq__list">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className={`bb-faq__item${openIndex === idx ? ' open' : ''}`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="bb-faq__question">{faq.question}</div>
            {openIndex === idx && <div className="bb-faq__answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;

