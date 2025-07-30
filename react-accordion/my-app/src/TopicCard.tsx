import { type Topic } from "./App";


type Props = {
  topic: Topic;
  isOpen: boolean;
  onToggle: () => void;
};

export function TopicCard({ topic, isOpen, onToggle }:Props) {

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px' }}>
      <div
        onClick={onToggle}
        style={{
          cursor: 'pointer',
          background: 'grey',
          padding: '10px',
          fontWeight: 'bold',
          color:"black",
        }}
      >
        {topic.title}
      </div>
      {isOpen && (
        <div style={{ padding: '10px', background: 'white', color:'black' }}>
          {topic.content}
        </div>
      )}
    </div>
  );
};
