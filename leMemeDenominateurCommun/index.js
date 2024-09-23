function getDivisors(n) {
   let divisors = [];
   for (let i = 1; i <= n; i++) {
       if (n % i === 0) {
           divisors.push(i);
       }
   }
   return divisors;
}

function findGreatestCommonDivisor(divisors1, divisors2) {
   let sortedDivisors2 = divisors2.sort((a, b) => b - a);
   for (let i = 0; i < sortedDivisors2.length; i++) {
       if (divisors1.includes(sortedDivisors2[i])) {
           return sortedDivisors2[i];
       }
   }
   return null;
}

function findGCD() {
   let number1 = parseInt(document.getElementById('number1').value);
   let number2 = parseInt(document.getElementById('number2').value);

   if (isNaN(number1) || isNaN(number2)) {
       document.getElementById('result').innerText = "Veuillez entrer deux nombres valides.";
       return;
   }

   let divisors1 = getDivisors(number1);
   let divisors2 = getDivisors(number2);
   let gcd = findGreatestCommonDivisor(divisors1, divisors2);

   if (gcd !== null) {
       document.getElementById('result').innerText = `Le plus grand dénominateur commun est: ${gcd}`;
   } else {
       document.getElementById('result').innerText = "Aucun dénominateur commun trouvé";
   }
}