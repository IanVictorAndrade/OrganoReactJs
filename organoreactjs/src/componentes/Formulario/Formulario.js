import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

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

    const Salvar = (evento) => {
        evento.preventDefault()
        alert('Formulário enviado com sucesso!')
    }

    return (
        <section className="formulario">
            <form onSubmit={Salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar Card
                </ Botao>
            </form>
        </section>
    )
}

export default Formulario