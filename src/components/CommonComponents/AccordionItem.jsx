import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { HiPlus } from "react-icons/hi";

const AccordionItem = ({item, i}) => {
  return (
    <Accordion.Item value={i} className="border rounded-lg overflow-hidden">
        <Accordion.Header>
          <Accordion.Trigger className="group w-full flex justify-between items-center px-4 py-3 bg-white text-gray-700  font-bold transition ease-out">
            {item.header}
            <HiPlus className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-4 py-3 bg-white text-sm font-semibold text-gray-700">
          {item.content}
        </Accordion.Content>
    </Accordion.Item>
  )
}

export default AccordionItem