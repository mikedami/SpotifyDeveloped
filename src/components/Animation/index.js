import './index.scss';

const Animation = ({letterClass, strArray, index}) => {
    return(
        <span>
            {
                strArray.map((char, i) => (
                    <span key ={char+i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}
/*Inspired / learned from Slobodan
https://www.youtube.com/watch?v=bmpI252DmiI&list=PL0yjn6PsaHvDzGJIEM1a0d9wdDixbUeit&index=9&t=1204s
*/
export default Animation