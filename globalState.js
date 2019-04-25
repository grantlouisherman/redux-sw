
function State(initialState){
  this.initialState = initialState
  this.actionCreators = {}
}

State.prototype.updateState = function(pieceOfState){
  if(!this.initialState[pieceOfState]){
    this.initialState[pieceOfState] = {}
  }
}

State.prototype.bindActionCreator = function (pieceOfState, action, actionCreatorFunction){
  if(!this.actionCreators[pieceOfState]){
    this.updateState(pieceOfState)
    this.actionCreators[pieceOfState] = {}
    this.actionCreators[pieceOfState][action] = actionCreatorFunction
  }else{
    let stateObj = this.actionCreators[pieceOfState]
    stateObj[action] = actionCreatorFunction
  }
}

State.prototype.RootReducer = function (pieceOfState, action){
  const args = [].slice.call(arguments).slice(2)
  const data = Promise.resolve(this.actionCreators[pieceOfState][action](...args))
  this.initialState[pieceOfState] = data
}
