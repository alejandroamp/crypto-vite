import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { monedas } from "../data/monedas"
import useSelectMonedas from "../hooks/useSelectMonedas"
import Error from "./Error"

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Select Fiat', monedas)
    const [crypto, SelectCrypto] = useSelectMonedas('Select Crypto', cryptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCryptos = resultado.Data.map(crypto => {

                const objeto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName,
                }
                return objeto
            })
            //console.log(arrayCryptos);
            setCryptos(arrayCryptos)
        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        //console.log('Enviando Formulario');
        if ([moneda, crypto].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            crypto
        })
    }


  return (
    <>
    {error && <Error>Please select fiat and crypto</Error>}
        <form onSubmit={handleSubmit}>
            <SelectMonedas />
            <SelectCrypto />
            <InputSubmit type="submit" value="Check"/>
        </form>
    </>
  )
}

export default Formulario