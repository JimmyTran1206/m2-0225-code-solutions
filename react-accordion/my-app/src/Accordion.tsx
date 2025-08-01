import { useState } from 'react';
import { type Topic } from './App';
import { TopicCard } from './TopicCard';

type Props = {
  topics: Topic[];
};

function Accordion({ topics }:Props) {
  const [openTopicId, setOpenTopicId] = useState<number | null>(null);

  function handleToggle (id: number):void {
    setOpenTopicId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openTopicId === topic.id}
          onToggle={() => handleToggle(topic.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
