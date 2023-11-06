import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'
import {useState} from "react";

const Formulario = () => {

    const times = [
        'Programação',
        'Design',
        'Marketing',
        'Vendas',
        'RH',
        'Financeiro',
        'Administrativo'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const Salvar = (evento) => {
        evento.preventDefault()
        alert('Formulário enviado com sucesso!')
    }

    return (
        <section className="formulario">
            <form onSubmit={Salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    Alterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    Alterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    Alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar Card
                </ Botao>
            </form>
        </section>
    )
}

export default Formulario