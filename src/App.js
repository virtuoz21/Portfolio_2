import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Categories from "./components/Products/Categories";
import ShowFullItem from "./components/Products/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
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
          price: '150.99',
        },
        {
          id: '4',
          title: 'Armchair',
          img: 'armchair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sapien at augue varius dignissim vel eu augue. Etiam quis est ligula.',
          category: 'chairs',
          price: '740.80',
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
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
   <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder} />
    <Categories chooseCategory={this.chooseCategory} />
    <Products onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
    
    {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
    <Footer />
   </div>
  );
}

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
