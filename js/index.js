// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 const price = product.querySelector('.price span');
 const quantity = product.querySelector('.quantity input');
  let sumOfProducts = quantity.value * price.innerText;
  console.log(sumOfProducts)
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = sumOfProducts;
  return sumOfProducts;
}

updateSubtotal(document);

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0;
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  for (const element of products) {
    total += updateSubtotal(element);
   // console.log(total) 
  };

  const totalValue = document.querySelector('#total-value span');
  // console.log(totalValue.innerText)
  totalValue.innerText = total;
  return total;

  // ITERATION 3
  //... your code goes here
}
calculateAll(document)


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  const removeParent = target.parentNode.parentNode.parentNode;
  removeParent.removeChild(target.parentNode.parentNode)
  // console.log(removeParent);
};


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let element of removeButtons) {
  element.addEventListener('click', removeProduct);
    };
});
