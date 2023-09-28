import { DivMain } from "./container.styled";



const Container = ({children}:{children:JSX.Element | JSX.Element[]}) => {
    return (
        <DivMain>
            {children}
        </DivMain>
    )
}

export default Container;