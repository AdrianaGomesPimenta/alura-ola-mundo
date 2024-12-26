import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Adriana!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Adriana"
                className={styles.fotoSobreMim}       
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou muito feliz em compartilhar um pouco da minha trajetória em programação com você.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Senai, onde fiz um curso de 3 meses de Front-end. Nele, aprendi lógica de programação e o básico de HTML, CSS e JavaScript. Foi amor à primeira vista! Eu me apaixonei por programação e decidi que era isso que queria fazer da vida.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Análise e Desenvolvimento de Sistemas no Centro Universitário Instituto de Educação Superior de Brasília (IESB). Durante a graduação, tive a oportunidade de estudar diversas áreas, como desenvolvimento web, dispositivos móveis, redes, banco de dados, entre outras tecnologias. Esse período foi marcado por muito aprendizado e crescimento pessoal e profissional.
            </p>

            <p className={styles.paragrafo}>
                Embora eu não tenha conseguido um estágio para seguir com meu sonho de me tornar desenvolvedora, decidi continuar buscando conhecimento. Foi então que me inscrevi na imersão ONE da Alura, onde estou atualmente aprofundando meus conhecimentos em Front-end.
            </p>

            <p className={styles.paragrafo}>
                Esse curso tem sido fundamental para o meu desenvolvimento. A cada dia, aprendo mais e fico ainda mais motivada a seguir em frente, focada no que quero para minha carreira.:)
            </p>
            
        </PostModelo>
      
    )
}