function Cal(){
    let presumido_a = Number(pres.value)
    let presumido_b = Number(pres2.value)
    let retencao_a = Number(retencao.value)
    let mes_1 = Number(tab1.value)
    let mes_2 = Number(tab2.value)
    let mes_3 = Number(tab3.value)
    //serviço//
    let tri_t = (mes_1 + mes_2 + mes_3)
    let aliquota = presumido_a / 100
    let pre_trimestre = tri_t * aliquota
    let aliquota2 = presumido_b / 100
    trimestre.innerHTML = `${tri_t}`
    let pis_3 = (mes_3 * 0.0065).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    let cofins_3 = (mes_3 * 0.03).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    let csll_3 = ((tri_t * aliquota)*0.09).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    let irpj_3 = (((tri_t * aliquota)*0.15)-retencao_a).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

    let pis_1 = (mes_1 * 0.0065).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    let cofins_1 = (mes_1 * 0.03).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    
    let pis_2 = (mes_2 * 0.0065).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
    let cofins_2 = (mes_2 * 0.03).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

    //adicional//

    let adicional = ((((tri_t * aliquota)*0.15)-retencao_a)+((pre_trimestre - 60000)*0.10)).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

    //comercio//
                
    if(presumido_b == 12 && pre_trimestre <= 60000){
            pis_mes1.innerHTML = `${pis_1}`
            cofins_mes1.innerHTML = `${cofins_1}`
            pis_mes2.innerHTML = `${pis_2}`
            cofins_mes2.innerHTML = `${cofins_2}`
            pis_mes3.innerHTML = `${pis_3}`
            cofins_mes3.innerHTML = `${cofins_3}`
            irpj_mes3.innerHTML = `${irpj_3}`
            csll_mes3.innerHTML = `${csll_4}`
    }else if(presumido_b == 12 && pre_trimestre > 60000){
            pis_mes1.innerHTML = `${pis_1}`
            cofins_mes1.innerHTML = `${cofins_1}`
            pis_mes2.innerHTML = `${pis_2}`
            cofins_mes2.innerHTML = `${cofins_2}`
            pis_mes3.innerHTML = `${pis_3}`
            cofins_mes3.innerHTML = `${cofins_3}`
            irpj_mes3.innerHTML = `${adicional}`
            csll_mes3.innerHTML = `${csll_4}`
            alert `Com adicional de IRPJ!`
    }
    
    else if(pre_trimestre <= 60000){
            pis_mes1.innerHTML = `${pis_1}`
            cofins_mes1.innerHTML = `${cofins_1}`
            pis_mes2.innerHTML = `${pis_2}`
            cofins_mes2.innerHTML = `${cofins_2}`
            pis_mes3.innerHTML = `${pis_3}`
            cofins_mes3.innerHTML = `${cofins_3}`
            irpj_mes3.innerHTML = `${irpj_3}`
            csll_mes3.innerHTML = `${csll_3}`
        }else{
            pis_mes1.innerHTML = `${pis_1}`
            cofins_mes1.innerHTML = `${cofins_1}`
            pis_mes2.innerHTML = `${pis_2}`
            cofins_mes2.innerHTML = `${cofins_2}`
            pis_mes3.innerHTML = `${pis_3}`
            cofins_mes3.innerHTML = `${cofins_3}`
            irpj_mes3.innerHTML = `${adicional}`
            csll_mes3.innerHTML = `${csll_3}`
            alert `Com adicional de IRPJ!`
    }
    
}

function clickMenu() {
        if (itens.style.display == 'block') {
            itens.style.display = 'none'
        } else {
            itens.style.display = 'block'
        }
    }