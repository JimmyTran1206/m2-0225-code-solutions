import Accordion from './Accordion';
import './App.css'

export type Topic = {
  id: number;
  title: string;
  content: string;
};

const topics: Topic[] = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content:
      'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
  },
  {
    id: 3,
    title: 'Cascading Style Sheets',
    content:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    id: 9,
    title: 'JavaScript',
    content:
      'JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
];

function App() {
  return (
    <>
    <div style={{ width: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>React Accordion</h2>
      <Accordion topics= {topics} />
    </div>
    </>
  );

}

export default App
