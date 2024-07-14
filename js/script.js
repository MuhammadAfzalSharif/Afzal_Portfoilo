

// section changing 
document.querySelector("#about").addEventListener("click",()=>
    {
        
    
        document.querySelectorAll('.describing-section').forEach(section => {
            section.classList.remove('active');
           
    
        });
    
        document.querySelectorAll('.text').forEach(section => {
            section.classList.remove("clickcolor");
    
        });
        
        document.querySelector("#about").classList.add("clickcolor");
        document.querySelector(".part1").classList.add("active");
    
       
    })

document.querySelector("#resume").addEventListener("click",()=>
{
    

    document.querySelectorAll('.describing-section').forEach(section => {
        section.classList.remove('active');
       

    });

    document.querySelectorAll('.text').forEach(section => {
        section.classList.remove("clickcolor");

    });
    
    document.querySelector("#resume").classList.add("clickcolor");
    document.querySelector(".part2").classList.add("active");

   
})

document.querySelector("#portfolio").addEventListener("click",()=>
    {
        
    
        document.querySelectorAll('.describing-section').forEach(section => {
            section.classList.remove('active');
           
    
        });
    
        document.querySelectorAll('.text').forEach(section => {
            section.classList.remove("clickcolor");
    
        });
        
        document.querySelector("#portfolio").classList.add("clickcolor");
        document.querySelector(".part3").classList.add("active");
    
       
    })



    document.querySelector("#blog").addEventListener("click",()=>
        {
            
        
            document.querySelectorAll('.describing-section').forEach(section => {
                section.classList.remove('active');
               
        
            });
        
            document.querySelectorAll('.text').forEach(section => {
                section.classList.remove("clickcolor");
        
            });
            
            document.querySelector("#blog").classList.add("clickcolor");
            document.querySelector(".part4").classList.add("active");
        
           
        })

        document.querySelector("#contact").addEventListener("click",()=>
            {
                
            
                document.querySelectorAll('.describing-section').forEach(section => {
                    section.classList.remove('active');
                   
            
                });
            
                document.querySelectorAll('.text').forEach(section => {
                    section.classList.remove("clickcolor");
            
                });
                
                document.querySelector("#contact").classList.add("clickcolor");
                document.querySelector(".part5").classList.add("active");
            
               
            })



// navbar click result  



document.querySelector(".all-web").addEventListener("click",()=>
    {
        
    
        document.querySelectorAll('.all').forEach(section => {
            section.style.display="block"
    
        });
    
        document.querySelectorAll('.nav-ele').forEach(section => {
            section.classList.remove("clickcolor");
    
        });
        
        document.querySelector(".all-web").classList.add("clickcolor");
        
    
       
    })


    document.querySelector(".responsive-web").addEventListener("click",()=>
        {
            
        
            document.querySelectorAll('.all').forEach(section => {
                section.style.display="none"
               
        
            });

            document.querySelectorAll('.responsive').forEach(section => {
                section.style.display="block"
                
                
               
        
            });
        
            document.querySelectorAll('.nav-ele').forEach(section => {
                section.classList.remove("clickcolor");
        
            });
            
            document.querySelector(".responsive-web").classList.add("clickcolor");
            
        
           
        })


 
        // header btn click and drop down 

        document.querySelector(".btn1").addEventListener("click",()=>
            {

                if(window.innerWidth<=435)
                    {
                        
                        document.querySelector(".email").innerHTML="muhammadafzalsharif<br>.2004@gmail.com"
                      document.querySelector(".click-dropdown-hide").classList.toggle("click-dropdown-display");

                        
                    }
        
                    else
                    {
                        
                        document.querySelector(".email").innerText="muhammadafzalsharif.2004@gmail.com"
                        document.querySelector(".click-dropdown-hide").classList.toggle("click-dropdown-display");

                        
                    }
                
                
            }
                
            

    
    )


    







    

   



    
    
    

