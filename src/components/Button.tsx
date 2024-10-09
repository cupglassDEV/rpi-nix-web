import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import "./Button.css"
export interface Base {
    sty?:string
}
export interface Normal extends Base {
    to?:undefined
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}
export interface Anchor extends Base {
    to:string
    onClick?:undefined
}
export type Prop = Normal|Anchor
const Button: React.FC<PropsWithChildren<Prop>> = (p) => {
    return p.to?<Link className={`cgdbutton${p.sty?`.${p.sty}`:''}`} to={p.to}>{p.children}</Link>:(
    <button className={`cgdbutton${p.sty?`.${p.sty}`:''}`} onClick={p.onClick}>
        {p.children}
      </button>
    );
};
  
  export default Button;
  