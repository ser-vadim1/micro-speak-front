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
      return {IsOpenAddedChat: true, isOpenCallIcon: false, isOpenContactsIcon: false, isOpennotifIcon: false}

      case "IsOpenCallIcon": 
        return {IsOpenAddedChat: false, isOpenCallIcon: true, isOpenContactsIcon: false, isOpennotifIcon: false}

      case "isOpenContactsIcon":
        return {IsOpenAddedChat: false, isOpenCallIcon: false, isOpenContactsIcon: true, isOpennotifIcon: false}

      case "isOpennotifIcon":
        return {IsOpenAddedChat: false, isOpenCallIcon: false, isOpenContactsIcon: false, isOpennotifIcon: true}
  }
}