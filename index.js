const deepCopy = (items) => items.map(item => Array.isArray(item) ? deepCopy(item) : item)

const bookListJanuaryEstimations = 
[
  ['Les Fleurs du Mal', 7.00, 7.00],
  ['La Guerre des Intelligences', 20.90, 1.23],
  ['Inferno', 9.99, 5.30]
]

bookListFebruaryEstimations = deepCopy(bookListJanuaryEstimations)
bookListFebruaryEstimations[0][2] = 8.23
bookListFebruaryEstimations[1][2] = 0.52


function estimateCashOnSell(bookList) {
  let amountEstimate = 0
  for (const book of bookList) {
    amountEstimate = amountEstimate + book[2]
  }
  return amountEstimate
}


const totalCashJanuary = estimateCashOnSell(bookListJanuaryEstimations)
console.log('Estimation de la vente en Janvier:', totalCashJanuary.toFixed(2), '€')

const totalCashFebruary = estimateCashOnSell(bookListFebruaryEstimations)
console.log('Estimation de la vente en Février:', totalCashFebruary.toFixed(2), '€')
