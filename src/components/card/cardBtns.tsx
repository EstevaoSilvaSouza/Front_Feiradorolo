import { DivCardBtns, ImgCardBtn } from "./cardBtns.styled";



const CardBtns = ({img,title,id}:{img:string, title:string,id:number}) => {
    return (
        <DivCardBtns key={id}>
            <div key={id}>
            <ImgCardBtn src={img} />
            </div>
           <h5>{title}</h5>
        </DivCardBtns>
    )
}

export default CardBtns;