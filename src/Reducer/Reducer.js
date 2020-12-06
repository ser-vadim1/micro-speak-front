import { ExpansionPanel } from "@material-ui/core";

export function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { isOpen: !state.isOpen };
    default:
      throw new Error();
  }

}

export function reducerToolbarsIcons(state, action) {
  switch(action.type){
    case "IsOpenAddedChat":
      return {
        IsOpenAddedChat: true, 
        isOpenCallIcon: false, 
        isOpenContactsIcon: false, 
        isOpennotifIcon: false,
        NotifiCount: state.NotifiCount
      }


      case "IsOpenCallIcon": 
        return {
          IsOpenAddedChat: false, 
          isOpenCallIcon: true, 
          isOpenContactsIcon: false, 
          isOpennotifIcon: false,
          NotifiCount: state.NotifiCount
        }


      case "isOpenContactsIcon":
        return {
          IsOpenAddedChat: false, 
          isOpenCallIcon: false, 
          isOpenContactsIcon: true,
          isOpennotifIcon: false,
          NotifiCount: state.NotifiCount
        }

      case "isOpennotifIcon":
        return {
          IsOpenAddedChat: false, 
          isOpenCallIcon: false, 
          isOpenContactsIcon: false,
          isOpennotifIcon: true,
          NotifiCount: state.NotifiCount,
        }

        case "plusNotifi":
          let myObj = Object.assign({}, state)
          if(myObj.NotifiCount >=10){
            myObj.NotifiCount = "10+"
          }else if (myObj.NotifiCount !== "10+"){
            console.log('xxx');
            myObj.NotifiCount = myObj.NotifiCount + 1
          }
       
          return myObj

      case "minusNotifi":
        let _myObj = Object.assign({}, state)
        _myObj.NotifiCount = _myObj.NotifiCount -1

        return _myObj

    }


}