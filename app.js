const UIamount = document.getElementById('amount')
const UIinterest = document.getElementById('interest')
const UIyears = document.getElementById('years')
const UImonthly = document.getElementById('monthly-payment')
const UItotal = document.getElementById('total-payment')
const UItotalInterest = document.getElementById('total-interest')

document.getElementById('loan-form').addEventListener('submit', function (e) {
  document.getElementById('results').style.display = 'none'
  document.getElementById('loading').style.display = 'block'
  setTimeout(calculateResults, 1500)
  e.preventDefault()
})

function calculateResults() {
  const principal = parseFloat(UIamount.value)
  const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12
  const calculatedPayments = parseFloat(UIyears.value) * 12
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)

  if (isFinite(monthly)) {
    UImonthly.value = monthly.toFixed(2)
    UItotal.value = (monthly * calculatedPayments).toFixed(2)
    UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
    document.getElementById('results').style.display = 'block'
    document.getElementById('loading').style.display = 'none'
  } else {
    showError('Please check your numbers')
  }
}

function showError(errorMsg) {
  document.getElementById('results').style.display = 'none'
  document.getElementById('loading').style.display = 'none'
  const UIcard = document.getElementById('card')
  const UIheading = document.getElementById('heading')
  const errorDiv = document.createElement('div')
  errorDiv.className = 'alert alert-danger'
  errorDiv.appendChild(document.createTextNode(errorMsg))
  card.insertBefore(errorDiv, UIheading)
  setTimeout(clearError, 2000)
}

function clearError() {
  document.querySelector('.alert').remove()
}

