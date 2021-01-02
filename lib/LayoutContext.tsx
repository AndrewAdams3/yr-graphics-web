import React from 'react'

type Action = { type: 'hideHeader' } | { type: 'showHeader' }
type Dispatch = (action: Action) => void


const defaultContext = {
  showHeader: true
}
const LayoutStateContext = React.createContext(defaultContext)
const LayoutDispatchContext = React.createContext<Dispatch | undefined>(undefined)


const reducer = (state: typeof defaultContext, action: Action) => {
  switch (action.type) {
    case "hideHeader":
      return {
        ...state, showHeader: false
      }
    case "showHeader":
      return {
        ...state, showHeader: true
      }
  }
}
function LayoutProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, defaultContext)
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  )
}

function useLayoutState() {
  const context = React.useContext(LayoutStateContext)
  if (context === undefined) {
    throw new Error('state must be used within a Provider')
  }
  return context
}
function useLayoutDispatch() {
  const context = React.useContext(LayoutDispatchContext)
  if (context === undefined) {
    throw new Error('dispatch must be used within a Provider')
  }
  return context
}


export {
  LayoutProvider,
  useLayoutState,
  useLayoutDispatch
}

