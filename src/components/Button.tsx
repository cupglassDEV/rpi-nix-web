import { PropsWithChildren } from "react";
import {Link} from "react-router-dom";
import "./Button.css"
export interface Base {
    sty?:string
    selected?:boolean
    ext?:true
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
    const slc = `cgdbutton${p.sty?` ${p.sty}`:""}${p.selected ? ' selected':' normal'}`
    return p.to?<Link className={slc} to={p.to} target={p.ext && "_blank"}>{p.children}</Link>:(
    <button className={slc} onClick={p.onClick}>
        {p.children}
      </button>
    );
};
  
  export default Button;
  