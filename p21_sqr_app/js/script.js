function find(event){
                           event.preventDefault();
                            let msg=document.getElementById("msg");
                              let num=document.getElementById("num");

                            if(num.value==="")
                            {
                                   alert("Please Enter Number");
                                   msg.innerHTML="";
                                   num.focus();
                                   return;
                           }
 
                            let n = parseFloat(num.value);
                            let square = n ** 2;

                          localStorage.setItem("res", square.toFixed(2));
                          window.location.href = "result.html";

                            
 }