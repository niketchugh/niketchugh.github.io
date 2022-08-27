const openbtn=document.querySelector(".js-open")
        const modalbg=document.querySelector("#modal-background")
        const modalbox=document.querySelector(".modal-box")
        openbtn.addEventListener('click',function(event){
            event.preventDefault()
            console.log("heloooo")
            modalbg.classList.add("active")
            modalbox.classList.add("active")
        })
        const closebtn=document.querySelectorAll(".js-close")
         closebtn.forEach(node=>{
            node.addEventListener('click',function(e){
                e.preventDefault()
                modalbg.classList.remove("active")
            modalbox.classList.remove("active")
            })
         })