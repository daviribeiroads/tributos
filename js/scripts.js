function Cal() {
        // Obtendo valores dos selects corretamente
        const presIrpj = Number(document.querySelector('#pres_select').value) / 100;
        const presCsll = Number(document.querySelector('#pres_comercio').value) / 100;
    
        // Pegando os valores numéricos dos inputs
        const retencao = Number(document.querySelector('#retencao').value);
        const mes_1 = Number(document.querySelector('#tab1').value);
        const mes_2 = Number(document.querySelector('#tab2').value);
        const mes_3 = Number(document.querySelector('#tab3').value);
    
        // Cálculo do trimestre
        const tri_t = mes_1 + mes_2 + mes_3;
        const pre_trimestre = tri_t * presIrpj;
    
        // Função para formatar valores em moeda BRL
        const formatarMoeda = valor => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
        // Cálculo dos tributos para cada mês
        const pis = [mes_1, mes_2, mes_3].map(mes => formatarMoeda(mes * 0.0065));
        const cofins = [mes_1, mes_2, mes_3].map(mes => formatarMoeda(mes * 0.03));
    
        // Cálculo de IRPJ e CSLL
        const csll_3 = formatarMoeda((pre_trimestre * 0.09));
        const csll_4 = formatarMoeda((tri_t * presCsll) * 0.09);
        const irpj_3 = formatarMoeda(((pre_trimestre * 0.15) - retencao));
    
        // Cálculo do adicional de IRPJ
        const adicional = formatarMoeda(((pre_trimestre * 0.15) - retencao) + ((pre_trimestre - 60000) * 0.10));
    
        // Atualizando os valores na tela
        document.querySelector('#trimestre').innerHTML = formatarMoeda(tri_t);
        document.querySelector('#pis_mes1').innerHTML = pis[0];
        document.querySelector('#pis_mes2').innerHTML = pis[1];
        document.querySelector('#pis_mes3').innerHTML = pis[2];
        document.querySelector('#cofins_mes1').innerHTML = cofins[0];
        document.querySelector('#cofins_mes2').innerHTML = cofins[1];
        document.querySelector('#cofins_mes3').innerHTML = cofins[2];
    
        // Lógica de tributação com base no valor do trimestre
        if (presCsll === 0.12 && pre_trimestre > 60000) {
            document.querySelector('#irpj_mes3').innerHTML = adicional;
            document.querySelector('#csll_mes3').innerHTML = csll_4;
            alert("Com adicional de IRPJ!");
        } else {
            document.querySelector('#irpj_mes3').innerHTML = irpj_3;
            document.querySelector('#csll_mes3').innerHTML = pre_trimestre <= 60000 ? csll_3 : csll_4;
        }
    }