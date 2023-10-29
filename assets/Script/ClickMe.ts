const {ccclass, property} = cc._decorator;

@ccclass
export default class ClickMe extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;


    onButtonClick(){
        this.label.string="You clicked!"
    }

    // update (dt) {}
}
