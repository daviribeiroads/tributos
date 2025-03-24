function Cal() {
    // Obtendo valores dos selects corretamente
    const presIrpj = Number(document.querySelector('#pres_select').value) / 100;
    const presCsll = Number(document.querySelector('#pres_comercio').value) / 100;
    const presIcms = Number(document.querySelector('#calc_icms').value) / 100 || 0;

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
    const calcularPisCofins = (mes) => {
        console.log("presIcms selecionado:", presIcms); // 🔍 Verificar se o valor está correto
        console.log("Valor do mês:", mes); 

        const base = mes * (1 - presIcms); // Base de cálculo reduzida pelo ICMS

        console.log("Base de cálculo (deduzida do ICMS):", base);

        return {
            pis: formatarMoeda(base * 0.0065),
            cofins: formatarMoeda(base * 0.03)
        };
    };

    const pis_cofins = [mes_1, mes_2, mes_3].map(calcularPisCofins);

    // Cálculo de IRPJ e CSLL
    const csll_3 = formatarMoeda(pre_trimestre * 0.09);
    const csll_4 = formatarMoeda((tri_t * presCsll) * 0.09);
    const irpj_3 = formatarMoeda((pre_trimestre * 0.15) - retencao);

    // Cálculo do adicional de IRPJ, somente se o lucro ultrapassar 60.000
    const adicional = pre_trimestre > 60000 
        ? formatarMoeda(((pre_trimestre * 0.15) - retencao) + ((pre_trimestre - 60000) * 0.10))
        : irpj_3;

    // Atualizando os valores na tela
    document.querySelector('#trimestre').innerHTML = formatarMoeda(tri_t);
    document.querySelector('#pis_mes1').innerHTML = pis_cofins[0].pis;
    document.querySelector('#pis_mes2').innerHTML = pis_cofins[1].pis;
    document.querySelector('#pis_mes3').innerHTML = pis_cofins[2].pis;
    document.querySelector('#cofins_mes1').innerHTML = pis_cofins[0].cofins;
    document.querySelector('#cofins_mes2').innerHTML = pis_cofins[1].cofins;
    document.querySelector('#cofins_mes3').innerHTML = pis_cofins[2].cofins;

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