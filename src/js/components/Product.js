import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Product {
    constructor(id, data) {
        const thisProduct = this;

        thisProduct.id = id;
        thisProduct.data = data;

        thisProduct.renderInHome();
        thisProduct.renderInProducts();
        thisProduct.getElements();
    }

export default Product;