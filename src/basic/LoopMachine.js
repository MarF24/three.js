class LoopMachine{
    constructor(){
        this.flag = false
        this.callbacks = []
    }
    addCallBack(callback){
        let index = this.callbacks.indexOf(callback)
        if(index > -1) return
        this.callbacks.push(callback)
    }
    removeCallBack(callback){
        let index = this.callbacks.indexOf(callback)
        if (index > -1) this.callbacks.splice(index, 1)

    }
    run = () => {
        if (!this.flag) return
        this.callbacks.forEach(cb => cb())
        window.requestAnimationFrame(this.run)
    }
    start(){
        if(this.flag) return
        this.flag = true
        this.run()
    }
    stop(){
        this.flag = false
    }
}

const loopMachine = new LoopMachine()

export default loopMachine

export {LoopMachine}