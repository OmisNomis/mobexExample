import { decorate, observable } from 'mobx'

class Store {
    text = ""
    counter = 0    
}

decorate(Store, {
    text: observable, 
    counter: observable 
})

export default new Store()