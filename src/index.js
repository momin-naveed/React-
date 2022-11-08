import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


// function Greeting() {
//   return <h1>This is Momin and this is my first component</h1>;
// }
// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello Momin'))
// };

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// };
// const Person = () => {
//   return <h2>Momin Naveed</h2>;
// }
// const Message = () => {
//   return <p>This is a Message</p>;
// };



const firstBook = {
  author: 'M Momin Naveed',
  title: 'How Working Backwards in Amazon',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81blnopcUiL._AC_UL600_SR600,400_.jpg',
}
const secondBook = {
  author: 'M Momin Naveed',
  title: 'The Very Hungry Caterpillar',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81v+TQfTb1L._AC_UL600_SR600,400_.jpg',
}

function BookList() {
  return <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={secondBook.author} >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sapiente soluta, aliquam consequuntur doloribus unde numquam dicta, in, quas sint voluptatibus ut consequatur.</p></Book>
    <Book img={secondBook.img} title={secondBook.title} author={firstBook.author} />
  </section>
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>)
}
// const Image = () => (
//   < img src="https://m.media-amazon.com/images/I/81rqFJVA5VL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
// )

ReactDom.render(<BookList />, document.getElementById('root'));
