// import InputField from './components/inputfield';
import Card from './components/card';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import StyledComponent from './components/Styledcomponents';

function App() {
  return (
    <>
      {/* <InputField
        type="text"
        placeholder="Enter your username"
        name="username"
        label="Username" />

      <InputField
        type="password"
        placeholder="Enter your password"
        name="password"
        label="Password" />

      <InputField
        type="email"
        placeholder="Enter your email"
        name="email"
        label="Email" /> */}

      <div className="card-container">
        <Card
          title="Book"
          description="This is a book."
          image="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
          price="19.99"
          button="Add to Cart"
        />
        <Card
          title="Laptop"
          description="This is a laptop."
          image="https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops-and-2-in-1s/new/bf-updates/media@2x1.jpg"
          price="999.99"
          button="Sold Out"
        />
        <Card
          title="Smartphone"
          description="This is a smartphone."
          image="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a20-a3x/listpage/427-600-blue.png"
          price="699.99"
          button="Out of Stock"
        />
        <Card
          title="Headphones"
          description="These are headphones."
          image="https://i.pcmag.com/imagery/roundups/05R5IqKUu9t9C6AnT53fynJ-23..v1697661262.jpg"
          price="199.99"
          button="Buy Now"
        />


      </div>
    </>
  );

}

export default App;
