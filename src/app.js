import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data:{
      currencies: {},
      euroValue: "",
      selectedCurrency: null,
      fromEuroResult: null
    },
    mounted(){
      this.getCurrencies()
    },
    methods:{
      getCurrencies: function () {
      fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(currencies => this.currencies = currencies.rates)
    },
      calcFromEuros: function () {
        let rate = this.currencies[this.selectedCurrency]
        this.fromEuroResult = (this.euroValue * rate).toFixed(2)
      }
  }
  })
})
