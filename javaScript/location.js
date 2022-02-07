

    






//delete only code above



function locations() {

    let a = document.getElementById("board");

    let b = `  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }
          .trafficsource{
              width: 80%;
              height: 70vh;
              background-color: #dde9f0;
              margin: auto;
              
              overflow-y: scroll;
              transition: 2s;
          }

          .usersLocation{
              width: 100%;
              background-color: #1D53AE;
              height: 10%;
              position: sticky;
              top:0px
          }
          th{
            position: sticky;
            top:8px;
            transition:2s;

          }
          .usersLocation p{
              text-align: center;
              font-size: 20px;
              padding-top: 10px;
              color: white;
          }
          .cen{
              margin-left: 30%;
              width: 50%;
              margin-bottom: 5px;
          }
          .btn1{
              width: 51%;
              margin-left: 30%;
          }
          .long, .lat{
              background-color:white;
              border-radius:1px;
              width:25%;
              color:black;
          }
          .long:hover{

            background-color:#dde9f0;

          }
           .lat:hover{
              background-color:#dde9f0;
          }
      </style>
      
    
    
    
    </head>
    <body>
    
    
        <div class="trafficsource">
            <div class="usersLocation">
                <p>Traffic Source</p>
            </div>

            <!--end of title-->
            
            <table class="table1">
                <tr>
                  <th> Latitude</th> 
                  <th> Longitude</th>
                </tr>
            
                    
                


                <tbody id="mytable">
            
                </tbody>
            
            </table>
        
           
        </div>
        
        
    </body>
    </html>  
   
    `
    













    a.innerHTML= `${b}`;
    //modify only below this line 
    

    function buildTable(){
        
    

            //looping through geolocation
                for(let i=0;i<localStorage.length;i++){
                    let key = localStorage.key(i)
                    console.log(key)
                
                    let arr1 = JSON.parse(localStorage.getItem(key))
                    let long1 = arr1.long;
                    let lat   = arr1.lat;
                    let type = arr1.type;
                    console.log(arr1)
                
                    
            
              if(type == `locator`) {
                 //console.log(long)
              
            
              
        

        let arr = [
        {longitude:`${long1}`, latitude:`${lat}`},
        // {longitude:"rene@gmail.com", latitude:"176257653"},
        // {longitude:"gashoka@gmail.com", latitude:"176257653"},
        // {longitude:"aimable@gmail.com", latitude:"176257653"},
        // {longitude:"manzi@gmail.com", latitude:"176257653"}
       
       ];
    
       let mytable = document.getElementById("mytable");
       for(let i of arr) {
        mytable.innerHTML += `
        <tr class="fetched">
         <td class="long">${i.longitude}</td>    
         <td class="lat">${i.latitude}</td>
        </tr>
        
        `
       }
    
       }
    }
    
    
    } buildTable()
    

}

