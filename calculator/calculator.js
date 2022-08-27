const lis=document.querySelectorAll("ul li")
        lis.forEach((node)=>{
            node.addEventListener('mousedown',function(event){
                const value=node.innerText.trim()
                const $Result=document.querySelector(".result")
                const resulttext=$Result.innerText.trim()
                if(resulttext == '0' || resulttext== "undefined" || resulttext=="Infinity"){
                    $Result.innerText=''

                }
                if(value == '='){
                    let solution=eval($Result.innerText.trim())
                    $Result.innerText=solution
                    return true
                }
                if(value.toLowerCase() == 'c')
                {
                    $Result.innerText= ''
                    return true
                }

                $Result.append(value);
            })
        })