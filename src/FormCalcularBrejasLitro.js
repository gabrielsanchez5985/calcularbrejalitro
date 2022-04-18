import { React, useState } from "react";
import './FormCalcularBrejasLitro.css';

const calcularPrecoLitro = (total, volume, preco) => {
    let precoLitro = 0.0;

    if (total * volume !== 0){
        precoLitro = ((preco * 1000.0) / (total * volume));
    }   
    
    let precoLitroText = precoLitro.toString().match(/\d+\.?\d{0,3}/)[0];
    return precoLitroText;
};

const calcularVolumeTotal = (latas, volumeLata) => {
    return latas * volumeLata
};

const FormCalcularBrejasLitro = () => {
    
    const [totalLatas, setarTotalLatas] = useState(12);
    const [volumeLata, setarVolumeLata] = useState(350);
    const [precoTotal, setarPrecoTotal] = useState(45.90);
    const [precoLitro, setarPrecoLitro] = useState(calcularPrecoLitro(totalLatas, volumeLata, precoTotal));
    const [volumeTotal, setarVolumeTotal] = useState(calcularVolumeTotal(totalLatas, volumeLata));
    
    const calcular = () => {
        setarPrecoLitro(calcularPrecoLitro(totalLatas, volumeLata, precoTotal));
        setarVolumeTotal(calcularVolumeTotal(totalLatas, volumeLata))
    };

    const handleTotalLatasChange = (event) => {
        setarTotalLatas(Number(event.target.value));
        setarVolumeTotal("CALCULE");
        setarPrecoLitro("CALCULE");
    };

    const handleVolumeLatasChange = (event) => {
        setarVolumeLata(Number(event.target.value));
        setarVolumeTotal("CALCULE");
        setarPrecoLitro("CALCULE");
    };

    const handlePrecoTotalChange = (event) => {
        setarPrecoTotal(Number(event.target.value));
        setarVolumeTotal("CALCULE");
        setarPrecoLitro("CALCULE");
    };

    return (
        <div className="form-calcular-brejas">
            <div className="form-input">
                <label><strong>#</strong> Quantidade latas</label><input type={'number'} onChange={ (e) => handleTotalLatasChange(e) } value={totalLatas} ></input>
                <label>🍺 Volume cada lata (ml)</label><input type={'number'} onChange={ (e) => handleVolumeLatasChange(e) } value={volumeLata} ></input>
                <label>💰 Preço total</label><input type={'number'} step='0.01' onChange={ (e) => handlePrecoTotalChange(e) } value={precoTotal} ></input>
            </div>
            <div className="form-output">
                <button onClick={ () => calcular() } >Calcular 🛠</button>
                <span>R$ <output className="Breja-span-theme">{ precoLitro }</output> o litro</span>
                <span><output className="Breja-span-theme">{ volumeTotal }</output>ml total</span>
            </div>
        </div>
    );
};

export default FormCalcularBrejasLitro;
