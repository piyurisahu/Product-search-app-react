let React =  require('react');
let ReactDOM =  require('react-dom');
let products = require('./products');
// let Search = require('./component/search');
import  Search from './component/search'
ReactDOM.render(<Search products={products}/>, document.getElementById('app'))