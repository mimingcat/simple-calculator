let calculation = '';
      const resultExist = localStorage.getItem('result');


      
      if (resultExist) {
        calculation = resultExist;
        displayCalculation();
      };

      function displayCalculation() {
        const calc = document.querySelector('.calculation-display').innerHTML = calculation;
      };

      function updateCalculation(value) {
        calculation += value;
        localStorage.setItem('result', calculation);
        console.log(calculation);
        displayCalculation();
      };
