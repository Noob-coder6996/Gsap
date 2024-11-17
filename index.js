let Dstate=true;
document.querySelector(".pointer").addEventListener("click",()=>{
                    if(Dstate){
                       gsap.to(".pointer",{
                              x:250,
                              duration:2,
                              ease: "power4.out",
                              backgroundColor:"black",  
                       })

                       gsap.to("body",{

                            duration:2,
                            backgroundColor:"black",
                       })

                       gsap.to(".slider",{
                              duration:2,
                              backgroundColor:"grey",
                       })
                       Dstate=false;
                     }
                      else
                     {
                                   gsap.to(".pointer",{
                                          x:0,
                                          duration:2,
                                          ease: "power4.out",
                                          backgroundColor:"yellow",  
                                   })
                            
                                   gsap.to("body",{
                            
                                        duration:2,
                                        backgroundColor:"white",
                                   })
                            
                                   gsap.to(".slider",{
                                          duration:2,
                                          backgroundColor:"black",
                                   })
                            Dstate=true;
                     }
});




