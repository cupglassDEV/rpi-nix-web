import { PropsWithChildren, Component, createRef, RefObject } from "react";
import Button from "./Button";
import './SpreadList.css';
import { Menu } from '@mui/icons-material';
class SpreadList extends Component<PropsWithChildren> {
    wrapper:RefObject<HTMLDivElement>
    constructor(props: PropsWithChildren){
        super(props)
        this.wrapper = createRef()
    }
    handleClick(){
        const w = this.wrapper.current!
        w.classList.toggle("show")
    }
render(){
    return <div className="cgdexmenu">
    <div className="toggle">
    <Button onClick={()=>this.handleClick()}>
        <Menu/>
    </Button>
    </div>
    <div ref={this.wrapper} className="content">
        {this.props.children}
    </div>
</div>
}
}
export default SpreadList;