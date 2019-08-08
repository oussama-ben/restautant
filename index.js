document.getElementById('plat-select').options[document.getElementById('plat-select').selectedIndex].dataset.prix;

function Addqte() {
    console.log(Addqte);
    var counter_qte = document.getElementById("qauntite").textContent;
    counter_qte++;
    document.getElementById("qauntite").innerHTML = "" + counter_qte;
    console.log(counter_qte);
    
    var prix = parseInt(document.getElementById('plat-select').options[document.getElementById('plat-select').selectedIndex].dataset.prix);
    document.getElementById("price").innerHTML = "" + prix;
   
    var Total = counter_qte * prix
    console.log(Total);

    var Totalcommande = Number(document.getElementById("Total-price").textContent);
    Totalcommande = Totalcommande + Total;
    document.getElementById("Total-price").innerHTML =   Total;
    console.log(Totalcommande);
  }
  function Deductqte() {

    console.log(Deductqte);
      var counter_plat = parseInt(document.getElementById("qauntite").textContent);
      if (counter_plat === 0) {
          return
      }
      counter_plat--;
    
      document.getElementById("qauntite").innerHTML =  counter_plat;
      console.log(counter_plat);
    
      var prix = parseInt(document.getElementById('plat-select').options[document.getElementById('plat-select').selectedIndex].dataset.prix);
      document.getElementById("price").innerHTML = prix;
    
      var Total = Number(document.getElementById("Total-price").textContent);
      Total = Total - prix;
      document.getElementById("Total-price").innerHTML =  Total;
      console.log(Total);
    }

    function Addsup() {
        console.log(Addsup);
        var counter_sup = document.getElementById("qauntite1").textContent;
        counter_sup++;
        document.getElementById("qauntite1").innerHTML =  counter_sup;
        console.log(counter_sup);
      
        var prix = parseInt(document.getElementById('sup-select').options[document.getElementById('sup-select').selectedIndex].dataset.prix);
    document.getElementById("price1").innerHTML =  prix;
   
    var Total = counter_sup * prix
    console.log(Total);
      
    var Totalcommande = Number(document.getElementById("Total-price1").textContent);
    Totalcommande = Totalcommande + Total;
    document.getElementById("Total-price1").innerHTML =  Total;
    console.log(Totalcommande);
      }
      function Deductsup() {
    
        console.log(Deductsup);
          var counter_supplim = parseInt(document.getElementById("qauntite1").textContent);
          if (counter_supplim === 0) {
              return
          }
          counter_supplim--;
        
          document.getElementById("qauntite1").innerHTML =  counter_supplim;
          console.log(counter_supplim);
        
          var prix = parseInt(document.getElementById('sup-select').options[document.getElementById('sup-select').selectedIndex].dataset.prix);
          document.getElementById("price1").innerHTML =  prix;
        
          var Total = Number(document.getElementById("Total-price1").textContent);
          Total = Total - prix;
          document.getElementById("Total-price1").innerHTML = "" + Total;
          console.log(Total);
        }

        function Addboir() {
            console.log(Addboir);
            var counter_buv = document.getElementById("qauntite2").textContent;
            counter_buv++;
            document.getElementById("qauntite2").innerHTML = "" + counter_buv;
            console.log(counter_buv);
            
            var prix = parseInt(document.getElementById('boir-select').options[document.getElementById('boir-select').selectedIndex].dataset.prix);
            document.getElementById("price2").innerHTML = "" + prix;
        
            var Total = counter_buv * prix
            console.log(Total);

            var Totalcommande = Number(document.getElementById("Total-price2").textContent);
            Totalcommande = Totalcommande + Total;
            document.getElementById("Total-price2").innerHTML = "" + Total;
            console.log(Totalcommande);
          }
          function Deductboir() {
        
            console.log(Deductboir);
              var counter_boir = parseInt(document.getElementById("qauntite2").textContent);
              if (counter_boir === 0) {
                  return
              }
              counter_boir--;
            
              document.getElementById("qauntite2").innerHTML = "" + counter_boir;
              console.log(counter_boir);
            
              var prix = parseInt(document.getElementById('boir-select').options[document.getElementById('boir-select').selectedIndex].dataset.prix);
              document.getElementById("price2").innerHTML = "" + prix;
            
              var Total = Number(document.getElementById("Total-price2").textContent);
              Total = Total - prix;
              document.getElementById("Total-price2").innerHTML = "" + Total;
              console.log(Total);
            }
function Commande(event){

  event.preventDefault();
  var city =document.getElementById("validationCustom03").value ;
  var state =document.getElementById("validationCustom04").value ;

  var Total1 =parseInt(document.getElementById("Total-price").textContent) ;
  var Total2 =parseInt(document.getElementById("Total-price1").textContent) ;
  var Total3 =parseInt(document.getElementById("Total-price2").textContent) ;
  

  Total1 = Total1 || 0
  Total2 = Total2 || 0
  Total3 = Total3 || 0


  var TotalAll= Total1 + Total2 + Total3;

  document.getElementById("liv").innerHTML = city+" , "+state;
  document.getElementById("Total-commande").innerHTML = ""+TotalAll;

  var name =document.getElementById("validationCustom01").value ;
  var last =document.getElementById("validationCustom02").value ;
  var phone =document.getElementById("validationCustom00").value ;

  document.getElementById("validatedname").innerHTML = name+" , "+last;
  document.getElementById("validatedphone").innerHTML = phone;

}




