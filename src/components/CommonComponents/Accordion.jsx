import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useLocation } from 'react-router-dom';

import AccordionItem from './AccordionItem';

const items = [
  {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
  {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
  // 
  {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
  // 
  {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
   {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
   {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
   {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
   {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
   {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
   {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },
   {
    
    header: "What is Car Revives?",
    content: "Car Revives is an auto-detailing service focused on wrapping, cleaning, and rejuvenating your vehicle."
  },

];      

const Accordions = () => {
  const location = useLocation();
  const isFaqPage = location.pathname === '/faqs';

   const displayItems = isFaqPage ? items : items.slice(0, 4);

  return (
    <Accordion.Root type="single" collapsible className={`w-full ${!isFaqPage ? "max-w-md mx-auto space-y-2" : " space-y-3" }`}>
  {
    displayItems.map((item, i) => (
      <AccordionItem key={i} item={item} i={i.toString()} />
    ))
  }
</Accordion.Root>

  );
};

export default Accordions;
