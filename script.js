//ISRO//  
async function foo(){
    try{
        
    var ani=await fetch('https://isro.vercel.app/api/customer_satellites');
    console.log(ani);
    var result= await ani.json();
    console.log(result);
          
      var cus = result.customer_satellites; 
      for(var i in cus){
      console.log(cus[i]);
      //  console.log(`Confirmed:${result[i].Confirmed} Active:${result[i].Active}`);
        
        var div1= document.createElement('div');
        div1.innerHTML = `country: ${cus[i].country}`;
        var div2= document.createElement('div');
        div2.innerHTML = `id: ${cus[i].id}`;
        var div3= document.createElement('div');
        div3.innerHTML = `launch_date: ${cus[i].launch_date}`;
        var div4= document.createElement('div');
        div4.innerHTML = `launcher: ${cus[i].launcher}`;
        var div5= document.createElement('div');
        div5.innerHTML = `mass: ${cus[i].mass}`;
        var br1= document.createElement('br');
        var divgt = document.getElementById("wrapper");
        divgt.append(div1,div2,div3,div4,div5,br1);
       
    }
    } catch(error){
console.log(error);
    }
} 
foo();
