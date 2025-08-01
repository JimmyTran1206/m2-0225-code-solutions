import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/morning-tree.jpg', '/cool-car.jpg', '/cool-kitty.jpg','/flower-field.jpg'];
const captions = ['A Beautiful Image of Space','A Beautiful Image of Tree','A Beautiful Image of Car','A Beautiful Image of Kitty','A Beautiful Image of Flowers'];
const descriptions = [`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
  commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas
  rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat,
  error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur
  labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum,
  dicta sunt laborum similique repellat?`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam optio, quae fugiat vitae commodi ducimus repellat exercitationem vel eum doloribus ea voluptas facilis maxime, officia aliquid? Asperiores sequi quibusdam sapiente.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, assumenda tempore excepturi ea explicabo molestiae laboriosam voluptas eligendi repudiandae magnam possimus totam saepe debitis quibusdam distinctio amet deleniti inventore libero?`,
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, dolorum quisquam. Nostrum cupiditate quasi nemo nihil totam ipsa veniam tenetur esse impedit nesciunt, dolorem ipsum, nam aperiam voluptatem itaque eaque?`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero qui, quis quasi provident quibusdam itaque earum autem culpa possimus temporibus voluptate, sint, eius veritatis. Sint temporibus voluptas similique alias!` ];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description texts={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
