import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: '1',
          title: 'Dinner Table',
          img: 'dinner table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sapien at augue varius dignissim vel eu augue. Etiam quis est ligula.',
          category: 'tables',
          price: '500',
        },
        {
          id: '2',
          title: 'Desk',
          img: 'desk.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sapien at augue varius dignissim vel eu augue. Etiam quis est ligula.',
          category: 'tables',
          price: '800',
        },
        {
          id: '3',
          title: 'Kitchen chair',
          img: 'kitchen chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sapien at augue varius dignissim vel eu augue. Etiam quis est ligula.',
          category: 'chairs',
          price: '150',
        },
        {
          id: '4',
          title: 'Armchair',
          img: 'armchair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sapien at augue varius dignissim vel eu augue. Etiam quis est ligula.',
          category: 'chairs',
          price: '740',
        },
        {
          id: '5',
          title: 'Corner sofa',
          img: 'corner sofa.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sapien at augue varius dignissim vel eu augue. Etiam quis est ligula.',
          category: 'sofas',
          price: '2200',
        },
        {
          id: '6',
          title: 'Folding sofa',
          img: 'Folding sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sapien at augue varius dignissim vel eu augue. Etiam quis est ligula.',
          category: 'sofas',
          price: '1900',
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
  return (
   <div className="wrapper">
    <Header orders={this.state.orders} />
    <Products items={this.state.items} onAdd={this.addToOrder} />
    <Footer />
   </div>
  );
}

addToOrder(item) {
  let isInArray = false;
  this.state.orders.forEach(el => {
    if(el.id === item.id)
    isInArray = true;
  });
  if(!isInArray)
  this.setState({ orders: [...this.state.orders, item] })
}
}

export default App;
